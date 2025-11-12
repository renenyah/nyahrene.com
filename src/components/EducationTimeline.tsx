import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  years: string;
  role: string;
  company: string;
  description: string;
}

const EducationTimeline: React.FC = () => {
  const experienceData: Experience[] = [
    {
      id: 1,
      years: "August 2025 – Present",
      role: "Co-founder & Software Developer",
      company: "SIM-AI",
      description: "Programming an AI sewing pattern generator for designers in the fashion industry."
    },
    {
      id: 2,
      years: "May 2025 – Present",
      role: "Virtual Reality Research Intern",
      company: "Carnegie Mellon University Human Computer Interaction Institute",
      description: "Developing immersive experiences to design inclusive VR systems for users with mobility disabilities."
    },
    {
      id: 3,
      years: "January 2025 – Present",
      role: "Research Assistant",
      company: "Designing Technologies for the Underserved (DETOUR) Lab",
      description: "Co-creating Afrofuturistic technologies through the application of Human-Computer Interaction principles."
    }
  ];


  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot with glow */}
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40" style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}></div>
              
              <div className="glow-card p-6">
                <span className="text-white/60 block mb-1">{item.years}</span>
                <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                <p className="text-white/80 mb-1">{item.company}</p>
                <p className="text-white/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
          {/* Simple Resume Note */}
          <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/60 text-sm">
            Check out my{' '}
            <a 
              href="https://drive.google.com/file/d/1krmTRaIgebX2mCOUOae01PTc5SCsunGG/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline transition-colors"
            >
              resume
            </a>
            {' '}for more detailed experiences!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;