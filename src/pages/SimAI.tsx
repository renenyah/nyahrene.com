import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SimAI: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* ---- HEADER ---- */}
      <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold italic">
            Nyah Rene
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ---- MAIN CONTENT ---- */}
      <main className="pt-24 pb-0 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>

          {/* Animated section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold italic mb-6">
              SIM-AI
            </h1>
            {/* Add this badge right after the title */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm font-semibold">
                Entrepreneurial Venture
              </span>
            </div>
            {/* Project Image */}
            <div className="glow-card p-8 mb-16 rounded-2xl border border-white/10 bg-white/5">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/M1.png" 
                  alt="SIM-AI pattern generation workflow showing VR-guided garment creation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Tech Stack Section */}
              <div className="glow-card p-8 mb-16 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge-premium">Python</span>
                <span className="tech-badge-premium">React</span>
                <span className="tech-badge-premium">Figma</span>
                <span className="tech-badge-premium">Llama3</span>
                <span className="tech-badge-premium">Gemini AI</span>
                <span className="tech-badge-premium">Unity</span>
                <span className="tech-badge-premium">AR/VR</span>
              </div>
            </div>
            {/* Team Section */}
            <div className="glow-card p-8 mb-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-6">The Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team member 1 */}
                <div className="flex items-center gap-4">
                  <img 
                    src="/ProN.jpg" 
                    alt="Nyah Rene"
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h3 className="font-bold text-white">Nyah Rene</h3>
                    <p className="text-white/60 text-sm">Software Engineer & VR Integration Lead</p>
                  </div>
                </div>
                
                {/* Team member 2 */}
                <div className="flex items-center gap-4">
                  <img 
                    src="/ProM.JPEG" 
                    alt="Mariama Barry"
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                    style={{ objectPosition: '50% 10%' }}
                  />
                  <div>
                    <h3 className="font-bold text-white">Mariama Barry</h3>
                    <p className="text-white/60 text-sm">Backend Engineer & AI Integration Specialist</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overview Section */}
            <div className="glow-card p-8 mb-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-white/80 leading-relaxed">
                SIM-AI is an AI-powered sewing pattern generator that revolutionizes garment creation. 
                Users can input their garment preferences and receive customized pattern panels, making 
                pattern-making accessible to designers and sewists of all skill levels.
              </p>
            </div>

            {/* Motivation Section */}
            <div className="glow-card p-8 mb-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-4">Motivation</h2>
              <p className="text-white/80 leading-relaxed mb-4">
              Traditional pattern-making is slow, costly, and prone to miscommunication between designers and manufacturers. 
              SIM-AI streamlines this process by using AI to instantly generate customized patterns from your ideas, saving time, 
              resources, and ensuring your creative vision is captured accurately.
              </p>
              <p className="text-white/80 leading-relaxed">
              We're using AI to make professional-quality garment creation easy and accessible for everyone, 
              whether you're a hobbyist or an experienced designer. SIM-AI doesn't just generate patterns, it 
              guides creatives through the process, helping you turn abstract ideas into real garments while 
              learning pattern-making fundamentals along the way!
              </p>
            </div>

            {/* Goals Section */}
            <div className="glow-card p-8 mb-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-4">Goals</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <span>Improve accuracy in clothing type recognition and constructional details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <span>Integrate Gemini AI for enhanced pattern customization capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <span>Explore AR/VR integration for 3D garment visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <span>Develop 2D pattern projection capabilities using projector technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">→</span>
                  <span>Make the tool accessible on mobile devices</span>
                </li>
              </ul>
            </div>

            {/* Progress Section */}
            <div className="glow-card p-8 mb-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold mb-4">What We've Built So Far</h2>
              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  <strong className="text-white">Working Demo:</strong> We've successfully developed a 
                  functional demo using Llama3 that demonstrates the core pattern customization system.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Dataset Expansion:</strong> Currently expanding our 
                  collection of basic patterns to improve the variety and accuracy of generated outputs.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Recognition System:</strong> Developing metrics to measure 
                  success in clothing type accuracy and the ability to distinguish between different garment 
                  styles.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Unity & VR Research:</strong> Team members have begun 
                  exploring Unity and VR coding for future AR/VR integration planned for the second semester.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </main>

      {/* Coming Soon Section - Full Width Bottom */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-purple-600/10 animate-gradient" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h2
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-7xl md:text-9xl font-bold italic mb-6 bg-gradient-to-r from-purple-400 via-pink-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Coming Soon
            </motion.h2>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-2xl mb-12"
          >
            More exciting updates on the way
          </motion.p>
          
          {/* Animated dots */}
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </motion.section>
    </div>
  );
};

export default SimAI;