'use client';
import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';

const Certificates = () => {
  type CertificateType = {
    url: string;
    img: string;
    title: string;
    completionDate: Date;
    skills: string[];
    description: string;
  };

  const certificates: CertificateType[] = [
    {
      url: "https://www.coursera.org/account/accomplishments/records/VSZ08VN21KR1",
      title: "Introduction to Security Principles in Cloud Computing",
      completionDate: new Date("2024-12-26"),
      img: "/Certificates/introduction.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Cloud computing", "Cloud based security", "Digital transformation", "Communication"]
    },
    {
      url: "https://www.coursera.org/account/accomplishments/records/8RN5V0UGIZS5",
      title: "Automate Cybersecurity Tasks with Python",
      completionDate: new Date("2025-01-13"),
      img: "/Certificates/automate.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Computer programming", "Python programming", "Coding", "PEP 8 style guide"]
    },
    {
      url: "https://coursera.org/share/6b22286251c231ab7173042535e5dfef",
      title: "Play It Safe: Manage Security Risks",
      completionDate: new Date("2024-12-30"),
      img: "/Certificates/play.jpg",
      description: "An online noncredit course authorized by google and offered through coursera",
      skills: ["nfosec","NIST RMF", "Security audits", "NIST CSF", "Incident Response Playbooks"]
    },
    {
      url: "https://coursera.org/share/75891b121a0b4fff476f8be3dec76abc",
      title: "Tools of the trade: Linux and SQL",
      completionDate: new Date("2025-01-03"),
      img: "/Certificates/tools.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["CLI", "SQL", "LINUX", "Bash"]
    },
    {
      url: "https://coursera.org/share/cef566456cb2b3d6391b979252d776e9",
      title: "Sound the Alarm: Detection and Response",
      completionDate: new Date("2025-01-05"),
      img: "/Certificates/sound.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["SIEM tools" , "Packet ANAlyzer", "IDS"]
    },
    {
      url: "https://coursera.org/share/c385771e383dd5d77b82b42c086e931f",
      title: "Put It to Work: Prepare for Cybersecurity Jobs",
      completionDate: new Date("2025-01-14"),
      img: "/Certificates/put.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Escalation", "resume and portfolio preparation", "stakeholder communication", "Job preparedness", "integrity and discretion"]
    },
    {
      url: "https://coursera.org/share/af0a6916787e2cfdfc99829af6b0f877",
      title: "Connect and Protect: Networks and Network security",
      completionDate: new Date("2025-01-01"),
      img: "/Certificates/connect.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Security Hardening", "Network security", "TCP/IP", "Network Architecture", "Cloud networks"]
    },
    {
      url: "https://coursera.org/share/8da8c0dc830637c454f104f8092510ad",
      title: "Assets, Threats and Vulnerabilities",
      completionDate: new Date("2025-01-03"),
      img: "/Certificates/assets.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Authentication",
              "vulnerability assessment",
              "Cryptography",
              "asset classification",
              "threat analysis"]
    },
    {
      url: "https://coursera.org/share/0f01092ffa600eaf5570120cc1c7611a",
      title: "Foundations of Cybersecurity",
      completionDate: new Date("2024-12-27"),
      img: "/Certificates/foundations.jpg",
      description: "An online noncredit course authorized by Google and offered through Coursera",
      skills: ["Infosec","Cybersecurity", "Ethics in cybersecurity", "Historical Attacks"]
    },

  ];

  const [isSelected, setIsSelected] = useState<null | CertificateType>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (certificate: CertificateType) => {
    setIsSelected(certificate);
    setTimeout(() => setShowModal(true), 50);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setIsSelected(null), 300);
  };

  return (
    <div id='certificates' className="min-h-screen md:w-[90%] mt-2 bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm mx-auto  px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl md:text-5xl text-white font-bold font-josefinSlab mb-12 md:mb-16 text-center md:text-left">
          My Certificates
        </h1> */}
         <div className="flex items-center  space-x-3 mb-12">
              <Award className="w-10 h-10 text-cyan-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                My Certificates
              </h1>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {certificates.map((certificate, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-[250px] h-[220px] rounded-xl overflow-hidden">
                  <Image 
                    src={certificate.img}
                    alt={certificate.title}
                    layout="fill"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    className="absolute top-2 right-2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handleOpen(certificate)}
                  >
                    <ArrowRight className="text-gray-900" size={20}/>
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-josefinSlab text-xl text-white mb-2">{certificate.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{certificate.completionDate.toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                    <p className="text-gray-300 text-sm mb-4">{certificate.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full flex items-center backdrop-blur-sm"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" strokeWidth={2} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isSelected && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4  transition-all duration-500 ease-in-out 

            ${showModal ? 'bg-black/90 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'}
          }`}
          onClick={handleClose}
        >
          <div className="absolute inset-0   bg-black/90 backdrop-blur-sm" />
          
          <div 
            className={`relative w-full h-[90%] max-w-4xl  bg-gray-900 rounded-2xl overflow-hidden shadow-2xl  transition-all duration-500 ease-in-out
              ${showModal 
                ? 'scale-100 opacity-100 translate-y-0 rotate-0' 
                : 'scale-50 opacity-0 translate-y-24 rotate-12'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={isSelected.img}
                alt={isSelected.title}
                layout="fill"
                className="object-contain"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{isSelected.title}</h2>
              <a href={isSelected.url} target='_blank' className='text-blue-400'>{isSelected.url}</a>
              <p className="text-gray-400 mb-4">{isSelected.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {isSelected.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full flex items-center"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
              onClick={handleClose}
            >
              <X className="text-white" size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;