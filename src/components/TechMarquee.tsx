import React from 'react';
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
  ];

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    return items.map((method, index) => (
      <span key={index} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-400/30 text-white font-medium mx-3 whitespace-nowrap">
        {method.icon}
        {method.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gray-900/30 relative w-full overflow-hidden">
      {/* Light effect for research section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative z-10 text-center">Skills</h2>

      {/* Scrolling container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of items */}
          {renderMarqueeItems(researchMethods)}
          {/* Duplicate set for seamless loop */}
          {renderMarqueeItems(researchMethods)}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ResearchMarquee;