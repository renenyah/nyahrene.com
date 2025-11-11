import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ClipboardList, Monitor, 
  Search, Brain, Layers, MapPin, 
  Split, StickyNote 
} from 'lucide-react';

const ResearchMarquee: React.FC = () => {
  const researchMethods = [
    { name: "PostgresSQL", icon: <Brain className="w-5 h-5 mr-2" /> },
    { name: "Surveys & Questionnaires", icon: <ClipboardList className="w-5 h-5 mr-2" /> },
    { name: "Physical Computing", icon: <MapPin className="w-5 h-5 mr-2" /> },
    { name: "User Interviews", icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Java", icon: <Split className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "Usability Testing", icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: "Participatory Design", icon: <Search className="w-5 h-5 mr-2" /> },
    { name: "Focus Groups", icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Affinity Mapping", icon: <StickyNote className="w-5 h-5 mr-2" /> },
    { name: "Qualitative", icon: <StickyNote className="w-5 h-5 mr-2" /> },
    { name: "Quantitative", icon: <Split className="w-5 h-5 mr-2" /> },
    { name: "PowerPoint", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "React", icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: "Figma", icon: <MapPin className="w-5 h-5 mr-2" /> },
    { name: "Excel", icon: <StickyNote className="w-5 h-5 mr-2" /> },
    { name: "Storyboarding ", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "Unity", icon: <Monitor className="w-5 h-5 mr-2" /> },


  ];

  return (
    <section className="py-20 relative w-full overflow-hidden">
      {/* Light effect for skills section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold italic text-white mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Static grid of skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {researchMethods.map((method, index) => (
            <motion.span 
              key={index} 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-400/30 text-white font-medium hover:scale-105 hover:from-pink-500/30 hover:to-purple-500/30 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {method.icon}
              {method.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchMarquee;