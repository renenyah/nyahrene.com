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

          {/* TITLE WITH DATE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold italic mb-4">Designing The AfroVerse</h1>
            <span className="text-white/60 text-base md:text-lg font-light">
              Emory University | January 2025 - Present
            </span>
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

            {/* NEW SECTION - Participant Projects */}
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Participant Projects</h2>
              <p className="text-white/80 mb-6 text-sm">
                Exploring futures through culturally-grounded design and technology
              </p>
              
              <div className="space-y-6">
                {/* All your P1-P6 content stays the same */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P1.jpg')}
                      alt="P1 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P1</h3>
                          <p className="text-sm text-pink-400">Community Building</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">3D Printing</span>
                          <span className="px-2 py-1 bg-white/10 rounded">QR Code</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Portable note-taking device that absorbs information and allows users to revisit notes by scanning a QR code, fostering knowledge sharing and community connection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* P2 */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P2.jpg')}
                      alt="P2 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P2</h3>
                          <p className="text-sm text-pink-400">Fashion</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">Arduino</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Fabric Cutting</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Arduino-powered belt that automatically cuts off excess material when the waist of jeans is too big, addressing fit challenges and reducing fabric waste.
                      </p>
                    </div>
                  </div>
                </div>

                {/* P3 */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P3.jpg')}
                      alt="P3 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P3</h3>
                          <p className="text-sm text-pink-400">Beauty</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">3D Printing</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Heat Design</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Specialized straightening tool designed for micro locs, filling a gap in hair care products and easing the hassle of difficult hair routines for this underserved hair type.
                      </p>
                    </div>
                  </div>
                </div>

                {/* P4 */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P4.jpg')}
                      alt="P4 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P4</h3>
                          <p className="text-sm text-pink-400">Self-Care</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">Embroidery</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Textile Design</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Motivational shirt inspired by Psalm 61:5, reminding the wearer that even when the future looks uncertain, they shine because they are "Reserved For Greatness."
                      </p>
                    </div>
                  </div>
                </div>

                {/* P5 */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P5.jpg')}
                      alt="P5 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P5</h3>
                          <p className="text-sm text-pink-400">Self-Awareness</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">Arduino</span>
                          <span className="px-2 py-1 bg-white/10 rounded">LED</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Conductive Materials</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Interactive piece where the shirt lights up only when she is recognized, and her full potential is revealed through touch. Her hair connects to the roots of a tree, symbolizing the depth required to truly see and understand Black women.
                      </p>
                    </div>
                  </div>
                </div>

                {/* P6 */}
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-2">
                    <img 
                      src={getImagePath('P6.jpg')}
                      alt="P6 Project" 
                      className="w-full md:w-48 h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">P6</h3>
                          <p className="text-sm text-pink-400">Global Awareness</p>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="px-2 py-1 bg-white/10 rounded">Laser Cutting</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Textile Art</span>
                          <span className="px-2 py-1 bg-white/10 rounded">Sewing</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Fabric-based installation bringing awareness to the Democratic Republic of Congo. The savannah-themed design represents what Congo could look like without ongoing violence, honoring its mountains and African cultural heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glow-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">My Contribution</h2>
              <p className="text-white/80 leading-relaxed mb-4">
              This study is currently in progress and we are in our first session. My contributions so far include:
              </p>
              
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="font-bold text-white mb-2">Research & Ethics</h3>
                  <p className="leading-relaxed">
                  Submitted and secured IRB approval for the study, and conducted a comprehensive literature review to identify 
                  best practices for engaging underrepresented groups in maker spaces and technology education.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-white mb-2">Technical Expertise</h3>
                  <p className="leading-relaxed">
                  Independently trained on multiple maker technologies including 3D printers, laser cutters, embroidery machines, 
                  and Arduino microcontrollers to effectively teach and mentor participants throughout the workshops.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-white mb-2">Curriculum Design</h3>
                  <p className="leading-relaxed">
                  Developed the structure and flow of each workshop session, creating hands-on activities that balance 
                  skill-building with community engagement and cultural relevance. Facilitated ideation sessions for persona 
                  development, helping participants ground their design work in authentic narratives and lived experiences.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-white mb-2">Data Collection</h3>
                  <p className="leading-relaxed">
                  Designed survey instruments and diary study protocols to capture participant experiences, skill development, 
                  and barriers to engagement.
                  </p>
                </div>
              </div>
            </div>
          

            <div className="glow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Challenges & Results</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                Since launching the workshops, we've engaged <span className="font-bold text-white">11+ Black women</span> across various disciplines at Emory in hands-on maker activities 
                including 3D printing, laser cutting, and Arduino programming. Early results show promising outcomes: <span className="font-bold text-white">50% of participants now 
                confidently apply these technical skills independently</span>, demonstrating the impact of culturally relevant, hands-on design spaces 
                in building genuine technical competency.
                 </p>

                 <p className="text-white/80 leading-relaxed mb-4">
                 Through ongoing analysis of participant surveys and diary study entries, we're identifying key community-based needs and usage 
                 barriers. These insights have directly informed our methodology refinements, contributing to an impressive <span className="font-bold text-white">90% retention rate </span> 
                  across the program which is a strong indicator that we're successfully creating spaces where Black women feel supported and motivated to 
                 continue their technology journeys.
                </p>
                <p className="text-white/80 leading-relaxed">
                As the study progresses, we're continuing to gather deeper insights on participant experiences and long-term outcomes. Check back 
                soon for comprehensive findings on how culturally affirming maker spaces can help bridge the gap between interest and active 
                involvement in technology fields.
                </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DesigningTheAfroVerse;