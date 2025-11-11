import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Helper to get correct image path for GitHub Pages
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

// ===========================
// STORYBOARD GALLERY SECTION
// ===========================

const StoryboardGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const images = [
    getImagePath('storyboard1.jpg'),
    getImagePath('storyboard2.png'),
    getImagePath('storyboard3.jpg'),
    getImagePath('storyboard4.jpg'),
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {/* Main image carousel */}
      <div className="relative aspect-video bg-black/20 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Storyboard ${currentIndex + 1}`}
          onClick={() => setZoomedImage(images[currentIndex])}
          className="w-full h-full object-contain p-2 cursor-zoom-in hover:opacity-90 transition"
        />

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Image counter */}
      <div className="text-center mt-3 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 mt-3 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-pink-400' : 'bg-white/30'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Zoomed image modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              src={zoomedImage}
              alt="Zoomed storyboard"
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-lg cursor-zoom-out"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-6 right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
              onClick={() => setZoomedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ===========================
// CODEBOOK SAMPLE SECTION
// ===========================

const CodebookSample: React.FC = () => {
  const [zoomed, setZoomed] = useState(false);
  const codebookImage = getImagePath('CodeBook.png');

  return (
    <div className="relative flex justify-center">
      <img
        src={codebookImage}
        alt="Codebook Sample"
        className="rounded-xl shadow-md w-full max-w-3xl object-contain cursor-zoom-in transition hover:opacity-90"
        onClick={() => setZoomed(true)}
      />

      {/* Zoomed-in overlay */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={codebookImage}
              alt="Zoomed Codebook Sample"
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-lg cursor-zoom-out"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-6 right-6 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
              onClick={() => setZoomed(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ===========================
// MAIN PAGE STARTS HERE
// ===========================

const VirtualRealityMobility: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold italic">Nyah Rene</Link>
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

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Projects - AT TOP */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Title - BEFORE GALLERY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic mb-6">
              Virtual Reality Mobility
            </h1>

          {/* TOP PICTURE GALLERY */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src={getImagePath('VR1.jpg')}
                alt="Gallery 1"
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
              <img
                src={getImagePath('VR2.jpg')}
                alt="Gallery 2"
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
              <img
                src={getImagePath('VR3.jpg')}
                alt="Gallery 3"
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
            </div>
          </section>
          <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Motivation</h2>
              <p className="text-white/80 leading-relaxed">
                Disability-led design principles remind us that movement is not merely functional,
                it is creative, personal, and adaptable. This study aims to understand how people
                with mobility disabilities conceptualize their disability identity within VR spaces
                and explore their movement preferences for virtual experiences. By centering the
                perspectives of disability experiences, this research ultimately seeks to expand
                disability representation in VR and contribute to building more empowering,
                positive play experiences.
              </p>
            </div>

            {/* Video Section */}
            <div className="glow-card p-8 mb-8">
              <div className="relative aspect-video bg-black/20 rounded-lg overflow-hidden">
                <video 
                  controls 
                  className="w-full h-full"
                >
                  <source src={getImagePath('VRdemo.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge-premium">Interviews</span>
                <span className="tech-badge-premium">Storyboard</span>
                <span className="tech-badge-premium">Virtual Reality</span>
                <span className="tech-badge-premium">Unity</span>
                <span className="tech-badge-premium">Usability Testing</span>
                <span className="tech-badge-premium">Qualitative</span>
                <span className="tech-badge-premium">Excel</span>
              </div>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Research Questions</h2>
              <ol className="space-y-4">
                <li className="text-white/80 flex items-start">
                  <span className="text-pink-400 mr-3 font-bold">1.</span>
                  <span>
                    How do people with mobility disabilities envision their ideal movement in VR spaces?
                  </span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-pink-400 mr-3 font-bold">2.</span>
                  <span>
                    How do current VR locomotion techniques perform across diverse mobility abilities?
                  </span>
                </li>
              </ol>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Target Population</h2>
              <p className="text-white/80 leading-relaxed">
                The study consisted of 4 pilot sessions with non-disabled users and 10 co-design sessions
                with lower body disabled users.
              </p>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Method</h2>
              <ol className="space-y-4">
                <li className="text-white/80 flex items-start">
                  <span className="text-pink-400 mr-3 font-bold">1.</span>
                  <span>
                    <strong className="text-white">Interview:</strong> Semi-structured conversations
                    exploring participants' backgrounds, disability identities, gaming habits, VR
                    experience, and perceptions of VR use.
                  </span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-pink-400 mr-3 font-bold">2.</span>
                  <span>
                    <strong className="text-white">Storyboarding:</strong> Facilitated imaginative
                    prototyping where participants described desired VR experiences based on their
                    movement preferences.
                  </span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-pink-400 mr-3 font-bold">3.</span>
                  <span>
                    <strong className="text-white">VR Demo:</strong> Hands-on immersion experience
                    (built in Unity) to familiarize participants with VR environments and interactions.
                  </span>
                </li>
              </ol>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">My Contribution</h2>
              <p className="text-white/80 leading-relaxed">
                My work consisted of programming a virtual environment using Unity paired with the
                Meta Oculus headset to provide an interactive experience for users in our focus group.
                I conducted interviews to learn about each participant's experience with their disability
                and sketched out a storyboard of a virtual environment of their choosing that they imagined
                and would like to explore. Participants envisioned experiences and movement that were
                entirely new to them, didn't yet exist, or recreated past experiences they wanted to relive.
                I also added Mixamo avatar animations and programmed different movement options for people
                with mobility disabilities, including arm-swinging, hand-pulling, teleportation, and more!
              </p>
            </div>

            {/* Storyboard Gallery */}
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Storyboard Gallery</h2>
              <StoryboardGallery />
            </div>

            {/* Codebook Section */}
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Codebook Sample</h2>
              <CodebookSample />
            </div>

            <div className="glow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Challenges & Results</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                We are currently in the data analysis phase and in the process of developing our codebook. 
                While we are still drawing conclusions and working toward composing a research paper, 
                preliminary observations have emerged regarding identity representation in VR. Notably, 
                participants who were born with their disability tended to maintain their disabled representation,
                whereas participants who acquired their disability later in life often preferred to be represented 
                as able-bodied. Further analysis is ongoing as we continue to uncover additional patterns and insights.
                 </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VirtualRealityMobility;