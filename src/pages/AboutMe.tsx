import React from 'react';
import { motion } from 'framer-motion';

const AboutMePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-dark min-h-screen relative"
    >
      {/* Enhanced premium light source effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Main light source */}
        <div className="absolute -top-[30vh] -left-[30vh] w-[80vh] h-[80vh] rounded-full bg-radial-glow-premium opacity-60 animate-glow-pulse"></div>
        
        {/* Secondary light source */}
        <div className="absolute top-[70vh] -right-[20vh] w-[50vh] h-[50vh] rounded-full bg-radial-glow-premium opacity-40 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating glow orbs */}
        <div className="absolute w-[100px] h-[100px] rounded-full bg-white/5 blur-xl animate-float" style={{ 
          top: '20vh', 
          left: '30vw',
          animationDelay: '0s'
        }}></div>
        
        <div className="absolute w-[80px] h-[80px] rounded-full bg-white/5 blur-xl animate-float" style={{ 
          top: '60vh', 
          right: '25vw',
          animationDelay: '1.5s'
        }}></div>
      </div>
      
      <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold italic hover:text-white transition-colors">
            Nyah Rene
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="/#projects" className="hover:text-white transition-colors relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="/about" className="text-white relative group">
                  About Me
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
                </a>
              </li>
              <li>
                {/* <a href="/#contact" className="hover:text-white transition-colors relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                </a> */}
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  className="cta-button-premium text-sm px-4 py-1"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              About Me
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <img
                    src="/Pic2.png"
                    alt="Profile"
                    className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-2 border-white/20 shadow-2xl"
                    style={{ objectPosition: 'center', transform: 'scale(1.1)' }}
                  />
                </div>
              </motion.div>
              
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1"
              >
                <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                  <p>
                    Hi! My name is <span className="text-white font-semibold">Nyah Rene</span>. I am a Haitian-American aspiring UX researcher who enjoys exploring the intersection of technology, design, 
                    and human–computer interaction. My research experiences have deepened my passion for understanding users by creating accessible and inclusive technologies. I also have a strong interest in 
                    fashion and how it connects to self-expression and creativity. I’m currently a senior at Emory University, graduating in December 2026 with a Bachelor of Science in Computer Science. 
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              
              <div className="flex gap-4 justify-center mb-4">
                <a
                  href="mailto:nyahrene26@gmail.com"
                  className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nyahrene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              <p className="text-sm text-white/60">nyahrene26@gmail.com</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <footer className="py-12 px-4 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Nyah Rene. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default AboutMePage;