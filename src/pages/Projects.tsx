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
      <section
        id="projects"
        className="py-20 bg-black bg-gradient-to-b from-gradientStart to-gradientEnd text-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Cylinder with projects texture */}
          <div className="max-h-[600px] h-[600px] mb-4 rounded-2xl pb-8 ">
            <Canvas flat camera={{ fov: 45 }}>
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
              />
              <Cyl />
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
              {/* PROJECTS SECTION */}

              {/* Project 1: E-XOR News */}
              <div className="flex project-card bg-black bg-gradient-to-tr from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 133833.png"
                  alt="E-XOR News"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    E-XOR News: News Aggregator Platform
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                      Built an AI-powered full-stack news platform enabling
                      real-time aggregation, transformer-based summarization,
                      and automatic topic classification.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      Designed a secure credibility pipeline using RAG-based
                      fake news detection with JWT authentication and bcrypt
                      hashing.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Python
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Transformers
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      RAG
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      React
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Node.js
                    </span>
                  </div>

                   <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/EXOR_news"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <button 
                    disabled
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold opacity-50 cursor-not-allowed"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 2: Echomeet */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 133422.png"
                  alt="Echomeet"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Echomeet: Video Conferencing App
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                      Crafted a real-time video conferencing solution using
                      WebRTC and Socket.io for low-latency audio/video
                      streaming.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      Implemented secure authentication with JWT & OAuth,
                      ensuring encrypted communication via HTTPS.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      React
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Node.js
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      WebRTC
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Socket.io
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      JWT
                    </span>
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
                      target="_blank"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3: Wanderlust */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 131506.png"
                  alt="Wanderlust"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wanderlust Travel Platform
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                      Engineered a secure travel planning platform with JWT
                      authentication and bcrypt-based password protection.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      Integrated a LangChain-powered chatbot to handle
                      travel-related FAQs and recommendations.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Node.js
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      MongoDB
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      LangChain
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Bootstrap
                    </span>
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
                      target="_blank"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4: Chattix */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 134220.png"
                  alt="Chattix"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Chattix: Real-Time Chat App
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                      Built a real-time chat application using Socket.io
                      enabling instant one-to-one and group messaging.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      Implemented JWT-based authentication with MongoDB-backed
                      message persistence.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      React
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Node.js
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Socket.io
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      MongoDB
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      JWT
                    </span>
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

                    <button 
                    disabled
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold opacity-50 cursor-not-allowed"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 5: Skill Swap */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/Screenshot 2025-12-20 143400.png"
                  alt="Skill Swap"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Skill Swap Platform
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                      Developed a MERN-based platform enabling users to exchange
                      skills through structured profiles.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      Implemented JWT authentication and role-based access for
                      secure interactions.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      React
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Typescript
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      Express
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      MongoDB
                    </span>
                    <span className="text-orange-300 px-2 py-1 text-sm">
                      JWT
                    </span>
                  </div>

                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Rishidubey15/Skill-swap-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors"
                    >
                      <i data-lucide="github" className=""></i> Code
                    </a>
                    <button 
                    disabled
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold opacity-50 cursor-not-allowed"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </button>
                  </div>
                </div>
              </div>


              {/* Project 6: Web Crawler Application */}
              <div className="flex project-card bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-4xl overflow-hidden shadow-lg p-6 border-2 border-orange-500">
                <img
                  src="./projects/web-crawler.png"
                  alt="Web Crawler"
                  className="w-1/2 h-72 object-cover rounded-2xl"
                />

                <div className="w-1/2 flex flex-col justify-center ml-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Web Crawler Application
                  </h3>

                  <ul className="flex flex-col gap-1 mb-4">
                    <li className="text-gray-600 dark:text-gray-400">
                       Developed a high-performance web crawler using a
                        multi-threaded BFS traversal algorithm for rapid data
                        extraction.
                    </li>
                    <li className="text-gray-600 dark:text-gray-400">
                      The tool automates the structured extraction of PDFs,
                        images, and videos and includes robust error handling
                        for crawler traps and duplicate URL detection to ensure
                        reliable performance.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">
                      Java
                    </span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">
                      Playwright
                    </span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">
                      JSoup
                    </span>
                    <span className="text-orange-300 px-2 py-1 rounded text-sm">
                      Maven
                    </span>
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
                    <button 
                    disabled
                      className="flex items-center bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-1 rounded-full font-semibold opacity-50 cursor-not-allowed"
                    >
                      <i data-lucide="external-link" className=""></i> Live Demo
                    </button>
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
