import gsap  from "gsap";


function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black bg-gradient-to-b from-gradientStart to-gradientEnd">
      <div className="container mx-auto px-6">
        <div className="text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hey, I am <span className="text-orange-400">Rishi Dubey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              A Full Stack Developer.
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              Passionate about creating scalable web applications with modern technologies. Specializing in React, Javascript, Node.js and MongoDB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-black transition-colors">
                Get In Touch
              </a>
              <a href="/Rishi-resume.pdf" download className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-colors">
                Download Resume
              </a>
            </div>
          </div>
          <div className="mt-16 flex justify-center space-x-6">
            <a href="https://github.com/Rishidubey15/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
              <i data-lucide="github" className="w-8 h-8"></i>
            </a>
            <a href="https://www.linkedin.com/in/rishi-dubey-703533217/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
              <i data-lucide="linkedin" className="w-8 h-8"></i>
            </a>
            <a href="https://leetcode.com/u/rishi_dubey15/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
              <i data-lucide="code" className="w-8 h-8"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
);
}

export default Hero;
