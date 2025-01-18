'use client';
import React, { useEffect, useState } from 'react';
import { Shield, User, Target, Flame } from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
        <div id='about'
        className={`max-w-7xl mx-auto bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm 
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="p-8">
          {/* Header */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ease-out mb-16
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center  space-x-3">
              <Shield className="w-10 h-10 text-cyan-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                About me
              </h1>
            </div>
            <p className="text-2xl  text-slate-400">
              Cybersecurity Professional with a focus on Ethical Hacking
            </p>
          </div>

          {/* Three-column layout for larger screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Section 1 */}
            <div className={`transform transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 h-[400px] flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-slate-200">About Me</h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-300 flex-grow">
                  My name is Dipesh Karki, and I am an aspiring cybersecurity professional committed to protecting digital environments. I possess a strong foundation in threat detection, incident response, and vulnerability management, supported by certifications like SC-200. I am dedicated to understanding and mitigating complex security challenges in today&apos;s evolving digital landscape.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className={`transform transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="bg-slate-800/80 rounded-lg p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 h-[400px] flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-slate-200">Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-300 flex-grow">
                  I value integrity, collaboration, and continuous learning, which I believe are essential for fostering a secure and innovative workplace. My analytical skills and problem-solving abilities enable me to effectively address security challenges while ensuring business continuity. I strive to create robust security frameworks that protect organizations and their stakeholders.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className={`transform transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '1100ms' }}
            >
              <div className="bg-slate-800/80 rounded-lg p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 h-[400px] flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <Flame className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-slate-200">Passion</h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-300 flex-grow">
                  I am deeply passionate about staying ahead of emerging cyber threats and applying proactive strategies to safeguard organizational systems. I continuously explore new security technologies and methodologies to enhance digital protection. My commitment to excellence drives me to constantly innovate and improve security measures.
                </p>
              </div>
            </div>
          </div>

          {/* Centered Quote section */}
          <div className={`max-w-2xl mx-auto transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1300ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-20">
                <div className="w-full h-full animate-pulse"></div>
              </div>
              <div className="relative bg-slate-800 rounded-lg p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <p className="text-center text-slate-400 italic text-xl">
                &ldquo;Securing the digital frontier, one vulnerability at a time.&ldquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default AboutMe;