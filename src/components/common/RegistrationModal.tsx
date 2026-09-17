import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf8lzYd1NSOJ-w4qTQoWBXu0SDjDVt6VVp-wMdAignRj9Qd9w/formResponse";
    
    const data = new URLSearchParams();
    data.append('entry.1417584337', formData.get('fullName') as string);
    data.append('entry.1559970251', formData.get('email') as string);
    data.append('entry.1228400768', formData.get('mobile') as string);
    data.append('entry.1419103011', formData.get('whatsapp') as string);
    data.append('entry.1856760918', formData.get('dob') as string);
    data.append('entry.1772955369', formData.get('class') as string);
    data.append('entry.630053316', formData.get('targetExam') as string);
    data.append('entry.412249994', formData.get('schoolName') as string);
    data.append('entry.979487730', formData.get('city') as string);
    data.append('entry.748911578', formData.get('state') as string);
    data.append('entry.715928867', formData.get('parentName') as string);
    data.append('entry.48454863', formData.get('parentPhone') as string);
    data.append('entry.50551666', formData.get('examDate') as string);
    data.append('entry.1576597319', formData.get('examMode') as string);
    data.append('entry.330417471', formData.get('preferredCentre') as string);

    try {
      // NOTE: Using 'no-cors' is required to submit to Google Forms directly from the browser without CORS errors.
      // However, 'no-cors' means you won't get a readable response back. We assume success if it doesn't throw.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl my-8">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-sans">BOOST 2027-28 Registration</h2>
            <p className="text-sm text-gray-500">Just ₹0 to reserve your scholarship.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Message */}
        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 text-green-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600">We have received your details. Our team will contact you shortly.</p>
          </div>
        ) : (
          /* Form Content */
          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-8">
              
              {/* STUDENT DETAILS */}
              <div>
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4 font-sans">Student Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                    <input required type="text" name="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile *</label>
                    <input required type="tel" name="mobile" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (if different)</label>
                    <input type="tel" name="whatsapp" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
                    <input type="date" name="dob" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-gray-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class *</label>
                    <select required name="class" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-gray-700">
                      <option value="">Select...</option>
                      <option value="10">Class 10</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ACADEMIC GOALS */}
              <div>
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4 font-sans">Academic Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target exam *</label>
                    <select required name="targetExam" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-gray-700">
                      <option value="">Select...</option>
                      <option value="JEE Advanced">JEE Advanced</option>
                      <option value="JEE Mains">JEE Main</option>
                      <option value="NEET UG">NEET UG</option>
                      <option value="Foundation">Foundation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School name *</label>
                    <input required type="text" name="schoolName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input required type="text" name="city" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" name="state" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                </div>
              </div>

              {/* PARENT / GUARDIAN */}
              <div>
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4 font-sans">Parent / Guardian</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent name</label>
                    <input type="text" name="parentName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent phone</label>
                    <input type="tel" name="parentPhone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                </div>
              </div>

              {/* EXAM DATE & CENTRE */}
              <div>
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4 font-sans">Exam Date & Centre</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred exam date *</label>
                    <select required name="examDate" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-gray-700">
                      <option value="">Select...</option>
                      <option value="November 1st">Nov 1st</option>
                      <option value="November 22nd">Nov 22nd</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Exam mode *</label>
                    <select required name="examMode" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-gray-700">
                      <option value="Offline">Offline</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred centre *</label>
                    <select required name="preferredCentre" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-gray-700">
                      <option value="Bansal junior college, Visakhapatnam">Bansal junior college, Visakhapatnam</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Footer / Payment Info */}
              <div className="mt-8 border border-orange-200 bg-orange-50/50 rounded-xl p-5">
                <h4 className="font-bold text-gray-900 mb-2">Registration fee: ₹0</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You'll be redirected to Cashfree's secure checkout (UPI, cards, netbanking, wallets) to complete payment. 
                  Your slot is confirmed only after successful payment.
                </p>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2.5 text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-lg transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : 'Pay ₹0 & Register'}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
