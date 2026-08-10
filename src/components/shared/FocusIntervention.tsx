import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Loader2, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { focusAnalyticsService } from '../../../services/focusAnalyticsService';

export interface FocusInterventionProps {
  /**
   * Boolean indicating if a phone is currently detected.
   * The component will internally track if this remains true for 3 continuous seconds.
   */
  isPhoneDetected: boolean;

  /**
   * Confidence score of the detection (0 to 1).
   * Interventions will only trigger if confidence >= 0.90.
   */
  phoneConfidence?: number;
  
  /** Callback fired when the intervention triggers (after 3s of continuous detection) */
  onPauseVideo?: () => void;
  
  /** Callback fired when the user clicks continue after the countdown */
  onResumeVideo?: () => void;
  
  /** Optional custom countdown time in seconds (default: 10) */
  countdownTime?: number;
}

export const FocusIntervention: React.FC<FocusInterventionProps> = ({
  isPhoneDetected,
  phoneConfidence,
  onPauseVideo,
  onResumeVideo,
  countdownTime = 10,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(countdownTime);
  const [motivationalMessage, setMotivationalMessage] = useState("");
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  
  const detectionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasSpokenRef = useRef(false);
  const lastTriggeredRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const speakMessage = useCallback((text: string, overrideMute = false) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if ((isMuted && !overrideMute) || !text) return;
    
    // Prevent duplicate playback
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    // Use onend and onerror to reset speaking state
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  }, [isMuted]);

  // Auto-play speech when message is loaded and modal is showing
  useEffect(() => {
    if (showModal && motivationalMessage && !isLoadingMessage && !hasSpokenRef.current) {
      hasSpokenRef.current = true;
      speakMessage(motivationalMessage);
    }
  }, [showModal, motivationalMessage, isLoadingMessage, speakMessage]);

  // Stop speech if modal closes un-expectedly or component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const fetchMotivationalMessage = useCallback(async () => {
    setIsLoadingMessage(true);
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error("No API key found in VITE_OPENAI_API_KEY");
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are an extremely strict study mentor. The student was caught using a mobile phone while studying.",
            },
            {
              role: "user",
              content: "Generate a motivational warning that is:\n- 2 to 3 sentences\n- Powerful\n- Encouraging\n- Makes the learner return to studying\n- No profanity\n- No insults\n- Maximum 40 words",
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error("OpenAI API request failed");
      }

      const data = await response.json();
      setMotivationalMessage(data.choices[0].message.content);
    } catch (error) {
      console.error("Failed to fetch motivational message:", error);
      // Fallback message as specified
      setMotivationalMessage("Stay focused. Every distraction delays your success.");
    } finally {
      setIsLoadingMessage(false);
    }
  }, []);

  // Monitor phone detection for 3 continuous seconds
  useEffect(() => {
    if (showModal) {
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
        detectionTimeoutRef.current = null;
      }
      return;
    }

    const isConfidentDetection = isPhoneDetected && (phoneConfidence === undefined || phoneConfidence >= 0.90);

    const checkAndStartTimer = () => {
      const timeSinceLastTrigger = Date.now() - lastTriggeredRef.current;
      const timeUntilCooldownEnds = 60000 - timeSinceLastTrigger;

      if (timeUntilCooldownEnds > 0) {
        detectionTimeoutRef.current = setTimeout(checkAndStartTimer, timeUntilCooldownEnds);
        return;
      }

      detectionTimeoutRef.current = setTimeout(() => {
        setShowModal(true);
        setCountdown(countdownTime);
        
        // Log the distraction in our Analytics module
        focusAnalyticsService.logDistraction();

        if (onPauseVideo) {
          onPauseVideo();
        }
        
        document.body.style.overflow = 'hidden';
        fetchMotivationalMessage();
      }, 3000);
    };

    if (isConfidentDetection) {
      if (!detectionTimeoutRef.current) {
        checkAndStartTimer();
      }
    } else {
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
        detectionTimeoutRef.current = null;
      }
    }
  }, [isPhoneDetected, phoneConfidence, showModal, onPauseVideo, countdownTime, fetchMotivationalMessage]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
      }
    };
  }, []);

  // Handle countdown timer
  useEffect(() => {
    if (showModal && countdown > 0) {
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, [showModal, countdown]);

  const handleContinue = () => {
    if (countdown > 0) return; // Prevent early continue
    setShowModal(false);
    document.body.style.overflow = '';
    // Clear message for next time
    setMotivationalMessage("");
    hasSpokenRef.current = false;
    lastTriggeredRef.current = Date.now(); // Start cooldown when returning to study
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (onResumeVideo) {
      onResumeVideo();
    }
  };

  // Prevent escape key from closing the modal during countdown or at all
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showModal && e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown, { capture: true });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [showModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
            // Intentionally NO onClick handler to prevent clicking outside to close
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl flex flex-col items-center text-center overflow-hidden border border-red-500/20"
          >
            {/* Animated pulsating background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative p-5 bg-red-100 dark:bg-red-900/30 rounded-full mb-6 mt-4 shadow-inner shadow-red-500/20"
            >
              <AlertTriangle className="w-16 h-16 text-red-600 dark:text-red-500 drop-shadow-md" />
            </motion.div>

            <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-4 tracking-tight">
              Focus Lost
            </h2>
            
            <div className="min-h-[100px] w-full flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                {isLoadingMessage ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-400"
                  >
                    <Loader2 className="w-8 h-8 animate-spin mb-3 text-red-500" />
                    <span className="text-sm font-medium animate-pulse">Your mentor is typing...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full relative flex flex-col items-center"
                  >
                    <div className="relative w-full px-4 py-2">
                      <span className="absolute -top-4 -left-2 text-4xl text-gray-300 dark:text-gray-700 font-serif leading-none">"</span>
                      <p className="text-gray-600 dark:text-gray-200 text-lg font-medium italic relative z-10">
                        {motivationalMessage}
                      </p>
                      <span className="absolute -bottom-4 -right-2 text-4xl text-gray-300 dark:text-gray-700 font-serif leading-none">"</span>
                    </div>

                    {/* Audio Controls */}
                    {speechSupported && (
                      <div className="flex items-center space-x-2 mt-4 text-gray-400">
                        <button
                          onClick={() => {
                            if (isMuted) setIsMuted(false);
                            speakMessage(motivationalMessage, true);
                          }}
                          disabled={isSpeaking}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Replay message"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            const newMutedState = !isMuted;
                            setIsMuted(newMutedState);
                            if (newMutedState && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                              window.speechSynthesis.cancel();
                              setIsSpeaking(false);
                            }
                          }}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center"
                          title={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-full flex justify-center items-center min-h-[80px]">
              {countdown > 0 ? (
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                  <span className="text-6xl font-black text-red-500 tracking-tighter tabular-nums drop-shadow-sm">
                    {countdown}
                  </span>
                  <span className="text-xs font-bold text-red-400/80 mt-2 uppercase tracking-[0.2em]">
                    Seconds Remaining
                  </span>
                </div>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinue}
                  className="w-full py-4 px-6 bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-2xl shadow-xl shadow-red-500/25 transition-all text-lg ring-1 ring-white/20"
                >
                  I'm Ready to Continue
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
