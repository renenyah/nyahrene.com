import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Helper to get correct image path for GitHub Pages
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const DesigningTheAfroVerse: React.FC = () => {
  const images = [
    {
      src: getImagePath('Embroidery.JPG'),
      alt: 'Workshop session with participants',
      caption: ''
    },
    {
      src: getImagePath('3DPrinter.JPG'),
      alt: '3D printing demonstration',
      caption: ''
    },
    {
      src: getImagePath('Ardiuno.JPG'),
      alt: 'Laser cutting designs',
      caption: ''
    },
    {
      src: getImagePath('LaserCutter.JPG'),
      alt: 'Collaborative design work',
      caption: ''
    }
  ];

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
          {/* Back to Projects - moved to very top */}
          <Link to="/#projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Gallery of images - no heading
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                {image.caption && (
                  <p className="p-4 text-white/70 text-sm">{image.caption}</p>
                )}
              </motion.div>
            ))}
          </div> */}

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold italic mb-6">Designing The AfroVerse</h1>
          </motion.div>

        {/* IMAGE GALLERY */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge-premium">Interviews</span>
                <span className="tech-badge-premium">Storyboard</span>
                <span className="tech-badge-premium">Participatory Design</span>
                <span className="tech-badge-premium">3D Printing</span>
                <span className="tech-badge-premium">Usability Testing</span>
                <span className="tech-badge-premium">Laser Cutting</span>
                <span className="tech-badge-premium">Embroidery</span>
                <span className="tech-badge-premium">Sewing</span>
                <span className="tech-badge-premium">Arduino</span>
              </div>
            </div>
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
              <p className="text-white/80 leading-relaxed mb-4">
              Black women face alarmingly low retention rates in computing fields, reflecting broader societal marginalization 
              that dismisses their expertise, intellect, and resilience due to barriers including lack of representation, limited 
              exposure to technology, and narrow perceptions of computing careers. 
              </p>
            </div>
            
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Motivation</h2>
              <p className="text-white/80 leading-relaxed">
              Research shows that reconfiguring makerspaces can encourage greater participation from women, positioning 
              these spaces as stepping stones for broader inclusion in innovation. This study uses participatory design to collaborate
              with Black women, regardless of their technical experience, see themselves in technology by engaging them in design 
              activities that are personally or culturally relevant to them. As a researcher and participant, I am both learning from 
              and contributing to this work by bringing my own experiences as a Black woman. Speculative design workshops using 
              technology can help Black women build their computing experience, stimulate interest, and foster creativity. 
              These workshops can also empower them to overcome hesitations about complex skills and solidify their influence in 
              the field.
              </p>

              <p className="text-white/80 leading-relaxed mt-4">
              By leveraging frameworks rooted in Black Feminist epistemologies, afrofuturism and intersectionality, we will 
              empower Black women to tap into their lived experiences to create, design and prototype utopias using technical 
              tools. Allowing Black women to frame their own narratives and equipping them to become contributors of the 
              technical landscape, challenges existing narratives of what the future and computing should look like.
              </p>
            </div>
            
            <div className="glow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Research Questions</h2>
                <ol className="space-y-4">
                 <li className="text-white/80 flex items-start">
                 <span className="text-pink-400 mr-3 font-bold">1. </span>
                 <span><strong className="text-white"></strong> What cultural, historical, or lived experiences influence the way Black women approach problem solving and design solutions?</span>
                </li>
                <li className="text-white/80 flex items-start">
                <span className="text-pink-400 mr-3 font-bold">2.</span>
                <span><strong className="text-white"></strong> How do Black women designers reimagine how they experience the world?</span>
                </li>
            </ol>
            </div>
            
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Target Population</h2>
              <div className="text-white/80 leading-relaxed">
                <p className="mb-4"><strong>Study size:</strong> 50 women</p>
                <p className="font-semibold mb-2">Participant Criteria:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Self-identify as part of the African diaspora</li>
                  <li>18 years of age or older</li>
                  <li>Currently enrolled at Emory University OR graduated within the last 12 months</li>
                  <li>Have an interest in design (arts, crafts, graphic design, etc.)</li>
                  <li>Proficient in English</li>
                </ul>
              </div>
            </div>

            <div className="glow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Method</h2>
                <ol className="space-y-4">
                 <li className="text-white/80 flex items-start">
                 <span className="text-pink-400 mr-3 font-bold">1.</span>
                 <span><strong className="text-white">Design Workshops:</strong> Black women will receive hands-on training in 
                 technologies including 3D printing, laser cutting, Cricut, embroidering, sewing, Arduino, and various software 
                 systems. They will then use these skills to create, design, and prototype technologies that address problems 
                 important to them. </span>
                </li>
                <li className="text-white/80 flex items-start">
                <span className="text-pink-400 mr-3 font-bold">2.</span>
                <span><strong className="text-white">Online Journals:</strong> Participants are maintaining journals and sketches
                throughout the design process, documenting their experiences through prompts about what they liked, didn't like, 
                and how activities could be improved. </span>
                </li>
                <li className="text-white/80 flex items-start">
                <span className="text-pink-400 mr-3 font-bold">3.</span>
                <span><strong className="text-white">Sister Circles:</strong> Sister circles, an intersectional data collection 
                method will be held at the end of each workshop activity to create a safe space for Black women to share their 
                thoughts and experiences. This approach values participants as partners rather than subjects, keeping their 
                voices at the center. </span>
                </li>
            </ol>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Workshop Planning</h2>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={getImagePath('Schedule.png')}
                  alt="Workshop schedule breakdown" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Participant Afro-Futuristic Ideation Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative rounded-xl overflow-hidden border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group">
                  <img 
                    src={getImagePath('A1.png')}
                    alt="Afro-futuristic design artifact 1" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4">
                      <p className="text-white text-sm font-semibold">Artifact 1</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group">
                  <img 
                    src={getImagePath('A2.png')}
                    alt="Afro-futuristic design artifact 2" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4">
                      <p className="text-white text-sm font-semibold">Artifact 2</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 group">
                  <img 
                    src={getImagePath('A3.png')}
                    alt="Afro-futuristic design artifact 3" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4">
                      <p className="text-white text-sm font-semibold">Artifact 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">My Contribution</h2>
              <p className="text-white/80 leading-relaxed">
              This study is currently in progress and we are in our first session. My contributions so far include submitting 
              the IRB application, reviewing research to identify best practices for our study, training myself on technical 
              equipment including but not limited to 3D printers, laser cutters, embroidery machines, and arduino so I can effectively 
              teach and collaborate with participants, and designing the structure and flow of each workshop session.
              </p>
            </div>
          

            <div className="glow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Challenges & Results</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                 While this study is still in its early stages, we are already observing encouraging patterns of engagement. 
                 Since launching the workshops, we have seen growing interest and participation from Black women across various 
                 disciplines at Emory, suggesting that creating culturally relevant, hands-on design spaces may help bridge the 
                 gap between interest and active involvement in technology fields.
                 </p>

                 <p className="text-white/80 leading-relaxed">
                 Comprehensive findings will be available as the study progresses. Check back soon for deeper insights on 
                 participant experiences and outcomes.
                </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DesigningTheAfroVerse;