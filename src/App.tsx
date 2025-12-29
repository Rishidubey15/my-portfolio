import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Loading from './pages/Loading';
import Hero from './pages/Hero';



gsap.registerPlugin(ScrollTrigger);

// function usePageSwipeEffect(sectionRefs) {
//   useEffect(() => {
//     sectionRefs.forEach((ref, idx) => {
//       if (!ref.current) return;
//       // Pin and swipe up each section except the last
//       if (idx < sectionRefs.length - 1) {
//         ScrollTrigger.create({
//           trigger: ref.current,
//           start: 'top top',
//           end: () => `+=${ref.current.offsetHeight}`,
//           pin: false,
//           pinSpacing: false,
//           scrub: true,
//           anticipatePin: 1,
//         });
//         gsap.fromTo(
//           ref.current,
//           {  
//             y:0,
//             // opacity: 1
//           },
//           {
//             y: () => `-${ref.current.offsetHeight}`,
//             // opacity: 0,
//             ease: 'none',
//             scrollTrigger: {
//               trigger: ref.current,
//               start: 'center center',
//               end: () => `+=${ref.current.offsetHeight}`,
//               scrub: true,
//             },
//             duration: 0.5,
//           }
//         );
//       }
//     });
//     // Cleanup
//     return () => ScrollTrigger.getAll().forEach(t => t.kill());
//   }, [sectionRefs]);
// }


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
    // const sectionRefs = [heroRef, aboutRef, skillsRef, projectsRef, experienceRef, contactRef, footerRef];

    // usePageSwipeEffect(sectionRefs);

    return (
      <>
        {loading && <Loading onComplete={() => setLoading(false)} />}
        {!loading && (
          <div className="dark bg-black min-h-screen text-white bg-gradient-to-b from-gradientStart to-gradientEnd">
            <Navbar />
            <div ref={heroRef} id="hero" className="page-section"><Hero /></div>
            <div ref={aboutRef} id="about" className="page-section"><About /></div>
            <div ref={skillsRef} id="skills" className="page-section"><Skills /></div>
            <div ref={projectsRef} id="projects" className="page-section"><Projects /></div>
            <div ref={experienceRef} id="experience" className="page-section"><Experience /></div>
            <div ref={contactRef} id="contact" className="page-section"><Contact /></div>
            <div ref={footerRef} id="footer" className="page-section"><Footer /></div>
          </div>
        )}
      </>
    );
  }

  export default App;
