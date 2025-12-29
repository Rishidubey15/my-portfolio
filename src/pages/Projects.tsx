import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

function Projects() {
  return (
    <>
      <section id="projects" className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

        {/* Cylinder with projects texture */}
          <div className="max-h-[600px] h-[600px] mb-4 rounded-2xl pb-8 ">
            <Canvas flat camera={{ fov: 45 }}>
              <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
              <Cyl  />
              <ambientLight />
              <EffectComposer>
                <Bloom
                  mipmapBlur
                  intensity={4.0}
                  luminanceThreshold={0.85}
                  luminanceSmoothing={0.85}
                />
                <ToneMapping adaptive />
              </EffectComposer>
            </Canvas>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12 justify-center">

              {/* Project  1*/}
              <div className="flex project-card bg-black bg-gradient-to-tr from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 133833.png"
                  alt="Video Conferencing App"
                  className="w-full h-60 object-fit rounded-2xl"
                />
                <div className="flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    E-xor News: News Aggregator Platform
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Crafted a full stack real-time video conferencing solution,
                    integrating WebRTC and Socket.io for seamless video/audio
                    streaming with minimal latency.
                      </li>
                      <li>Implemented secure authentication using JWT &amp; OAuth. Ensured data protection using bcrypt hashing and HTTPS protocols.
                      </li>
                    </ul>
                  </div>
                
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className=" text-orange-300 px-2 py-1 rounded text-sm">Python</span>
                    <span className=" text-orange-300 px-2 py-1 rounded text-sm">Transformers</span>
                    <span className=" text-orange-300 px-2 py-1 rounded text-sm">RAG</span>
                    <span className=" text-orange-300 px-2 py-1 rounded text-sm">React</span>
                    <span className=" text-orange-300 px-2 py-1 rounded text-sm">Node.js</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>

                    <a
                      href=""
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        data-lucide="external-link"
                        className=""
                      ></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 133422.png"
                  alt="Video Conferencing App"
                  className="w-full h-72 object-fit rounded-2xl"
                />
                <div className="flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Echomeet: Video Conferencing App
                  </h3>
                  <div className="text-white mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Crafted a full stack real-time video conferencing solution,
                    integrating WebRTC and Socket.io for seamless video/audio
                    streaming with minimal latency.
                      </li>
                      <li>Implemented secure authentication using JWT &amp; OAuth. Ensured data protection using bcrypt hashing and HTTPS protocols.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">React</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">WebRTC</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Sockets.io</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">JWT & OAuth</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Video-Conferencing-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <a
                      href="https://video-conferencing-app-frontend-28z6.onrender.com"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="external-link" className=""></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 131506.png"
                  alt="Wanderlust Project"
                  className="w-full h-72 object-fit rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wanderlust Travel Platform
                  </h3>
                  <div className="text-white mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Engineered a secure travel planner with robust JWT
                        authentication and bcrypt hashing for user data protection.
                      </li>
                      <li>The platform features a LangChain-powered chatbot that
                    handles travel FAQs.
                      </li>
                      <li>
                        Enhanced user engagement through integration of interactive maps and real-time review aggregation
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">MongoDB</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">LangChain</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Bootstrap</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Wanderlust-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <a
                      href="https://wanderlust-project-h3cc.onrender.com"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="external-link" className=""></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 134220.png"
                  alt="Chattix Project"
                  className="w-full h-72 object-fit rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Chattix: Real time Chat App
                  </h3>
                  <div className="text-white mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Engineered a secure travel planner with robust JWT
                        authentication and bcrypt hashing for user data protection.
                      </li>
                      <li>The platform features a LangChain-powered chatbot that
                    handles travel FAQs.
                      </li>
                      <li>
                        Enhanced user engagement through integration of interactive maps and real-time review aggregation
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">MongoDB</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">LangChain</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Bootstrap</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Wanderlust-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <a
                      href="https://wanderlust-project-h3cc.onrender.com"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="external-link" className=""></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 5 */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 143400.png"
                  alt="Skill Swap Platform"
                  className="w-full h-72 object-fit rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Skill Swap Platform
                  </h3>
                  <div className="text-white mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Engineered a secure travel planner with robust JWT
                        authentication and bcrypt hashing for user data protection.
                      </li>
                      <li>The platform features a LangChain-powered chatbot that
                    handles travel FAQs.
                      </li>
                      <li>
                        Enhanced user engagement through integration of interactive maps and real-time review aggregation
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">JavaScript</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">MongoDB</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">LangChain</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Bootstrap</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Wanderlust-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <a
                      href="https://wanderlust-project-h3cc.onrender.com"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="external-link" className=""></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/web-crawler.png"
                  alt="Web Crawler"
                  className="w-full h-72 object-fit rounded-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Web Crawler Application
                  </h3>
                  <div className="text-white mb-4">
                    <ul className="flex flex-col gap-1 numbered-list">
                      <li >Developed a high-performance web crawler using a
                    multi-threaded BFS traversal algorithm for rapid data
                    extraction. 
                      </li>
                      <li>The tool automates the structured extraction of
                    PDFs, images, and videos and includes robust error handling
                    for crawler traps and duplicate URL detection to ensure
                    reliable performance.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Java</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Playwright</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">JSoup</span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">Maven</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Web-crawler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <a href="" className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold opacity-50 cursor-not-allowed">
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
