
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" }, onComplete });
    tl.fromTo(
      textRefs[0].current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.7 }
    )
      .to(textRefs[0].current, { y: "-100%", opacity: 0, duration: 0.7, delay: 0.5 })
      .fromTo(
        textRefs[1].current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.7 }
      )
      .to(textRefs[1].current, { y: "-100%", opacity: 0, duration: 0.7, delay: 0.5 })
      .fromTo(
        textRefs[2].current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.7 }
      )
      .to(textRefs[2].current, { y: "-100%", opacity: 0, duration: 0.7, delay: 0.5 })
      .to(containerRef.current, { opacity: 0, pointerEvents: "none", duration: 0.5, delay: 0.2 });
  }, [onComplete]);

  return (
    <div className="loading-black" ref={containerRef}>
      <div className="loading-gradient" ref={textRefs[0]}>THINK</div>
      <div className="loading-gradient" ref={textRefs[1]}>CODE</div>
      <div className="loading-gradient" ref={textRefs[2]}>SOLVE</div>
    </div>
  );
};

export default Loading;
