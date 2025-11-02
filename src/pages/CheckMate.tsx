import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CheckMate: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold italic">Nyah Rene</Link>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold italic mb-6">CheckMate</h1>
            
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-white/80 leading-relaxed">
                Add your project description here.
              </p>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge-premium">React</span>
                <span className="tech-badge-premium">Firebase</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CheckMate;