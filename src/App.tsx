import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Loading from "./pages/Loading";
import Hero from "./pages/Hero";


gsap.registerPlugin(ScrollTrigger);

function usePageSwipeEffect(sectionRefs) {
  useEffect(() => {
    sectionRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      // Pin and swipe up each section except the last
      gsap.to(ref.current, {
        // y: () => `-${ref.current.offsetHeight}`,
        scale: 0.8,
        opacity: 0, 
        scrollTrigger: {
          trigger: ref.current,
          start: `${ref.current.offsetHeight} bottom`,
          end: () => `bottom+=${ref.current.offsetHeight}`,
          scrub: true,
          markers: true,
        },
      });
    });
    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [sectionRefs]);
}

function App() {
  const [loading, setLoading] = useState(true);

  // Section refs for page swipe
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const sectionRefs = [
    heroRef,
    aboutRef,
    skillsRef,
    projectsRef,
    experienceRef,
    contactRef,
    footerRef,
  ];

  // usePageSwipeEffect(sectionRefs);

  return (
    <>
      {/* {loading && <Loading onComplete={() => setLoading(false)} />} */}
      {
        <div className="dark bg-black min-h-screen text-white bg-gradient-to-b from-gradientStart to-gradientEnd">
          <Navbar />
          <div ref={heroRef} id="hero" className="page-section">
            <Hero />
          </div>
          <div ref={aboutRef} id="about" className="page-section">
            <About />
          </div>
          <div ref={skillsRef} id="skills" className="page-section">
            <Skills />
          </div>
          <div ref={projectsRef} id="projects" className="page-section">
            <Projects />
          </div>
          <div ref={experienceRef} id="experience" className="page-section">
            <Experience />
          </div>
          <Contact />
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
