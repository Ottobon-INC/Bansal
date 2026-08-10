import React from 'react';
import './ProgramCube.css';
import { Target, Award, Activity, Microscope, Rocket, BookOpen } from 'lucide-react';

interface ProgramCubeProps {
  className?: string;
}

export default function ProgramCube({ className = '' }: ProgramCubeProps) {
  return (
    <div className={`cube-container ${className}`}>
      <div className="box-card">
        <div className="face front">
          <Target className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">MPC + JEE Mains</span>
          <hr className="face-divider" />
          <p className="face-desc">• Comprehensive prep for boards & JEE Mains.</p>
        </div>
        <div className="face back">
          <Award className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">MPC + JEE Advanced</span>
          <hr className="face-divider" />
          <p className="face-desc">• Rigorous coaching for top IIT ranks.</p>
        </div>
        <div className="face right">
          <Activity className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">BiPC + NEET 3-Phase</span>
          <hr className="face-divider" />
          <p className="face-desc">• Specialized structured medical entrance focus.</p>
        </div>
        <div className="face left">
          <Microscope className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">Long Term NEET</span>
          <hr className="face-divider" />
          <p className="face-desc">• Dedicated 1-year program for repeaters.</p>
        </div>
        <div className="face top">
          <Rocket className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">Long Term JEE</span>
          <hr className="face-divider" />
          <p className="face-desc">• Focused preparation for drop-year students.</p>
        </div>
        <div className="face bottom">
          <BookOpen className="w-10 h-10 mb-2 text-college-gold" />
          <span className="face-title">IPE Foundations</span>
          <hr className="face-divider" />
          <p className="face-desc">• Strong basics for intermediate exams.</p>
        </div>
      </div>
    </div>
  );
}
