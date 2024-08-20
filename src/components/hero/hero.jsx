import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./hero.css";

const passion = ["UI UX Designer", "Web Developer"];

const typedText = [
  `With expertise in JavaScript, React.js, Tailwind, 
   HTML and CSS3, I've honed my skills to create user-friendly and visually appealing websites. 
   My journey in web development has been driven by a love for problem-solving and a commitment to delivering high-quality digital solutions. 
   I'm here to bring your vision to life and exceed expectations. Let's create something amazing together!`,
];

function Hero({ onComplete }) {
  const el1 = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    // Typed.js initialization

    const typed1 = new Typed(el1.current, {
      strings: passion,
      startDelay: 2000,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1500,
      smartBackspace: true,
      loop: false,
      showCursor: false, // No cursor display
    });

    const typed = new Typed(el2.current, {
      strings: typedText,
      startDelay: 7000,
      typeSpeed: 10,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: false,
      showCursor: false, // No cursor display
      onComplete: onComplete,
    });

    //AOS delay override
    document.querySelectorAll("[data-aos-delay]").forEach((element) => {
      const delay = parseInt(element.getAttribute("data-aos-delay"), 10);
      if (delay > 3000) {
        element.style.transitionDelay = `${delay}ms`;
      }
    });

    // Clean up
    return () => {
      typed1.destroy();
      typed.destroy();
    };
  }, []);

  return (
    <div className='container hero' id='hero'>
      <div className='width-70 banner'>
        <span
          className='normal-text text-yellow-600'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          Hi!... I'm
        </span>
        <h1 data-aos='fade-up' data-aos-delay='600'>
          {" "}
          Yerni <span className='span-col'>Kumar</span>{" "}
        </h1>
        <h2 className='main-heading' data-aos='fade-up' data-aos-delay='1000'>
          I'm a passionate <br />
          <span className='span-col' ref={el1}></span>
        </h2>
        <p
          className='normal-text'
          ref={el2}
          data-aos='fade-up'
          data-aos-delay='1000'
        ></p>
      </div>
      <button className='btn' data-aos='fade-up' data-aos-delay='15000'>
        Check Out My Work!
      </button>
    </div>
  );
}

export default Hero;
