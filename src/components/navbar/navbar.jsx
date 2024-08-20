import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [top, setTop] = useState(2);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setTop(
        prevScrollPos > currentScrollPos || currentScrollPos < 10 ? 2 : -17
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className='navbar-section'
      style={{
        top: `${top}rem`,
        transition: "top 0.3s ease",
      }}
    >
      <div className='navbar'>
        <div className='logo' data-aos='zoom-in-out' data-aos-delay='200'>
          <span>YK</span>
        </div>
        <div className='menu'>
          <a href='' className='menu-item'>
            Home
            <span className='underline'></span>
          </a>
          <a href='#work' className='menu-item' onClick={handleMenuClick}>
            work
            <span className='underline'></span>
          </a>
          <a href='#skills' className='menu-item' onClick={handleMenuClick}>
            Skills
            <span className='underline'></span>
          </a>
          <a href='#contact' className='menu-item' onClick={handleMenuClick}>
            Contact
            <span className='underline'></span>
          </a>
          <a href='#about' className='menu-item'>
            about
            <span className='underline'></span>
          </a>
          <span
            className='toggle-btn'
            data-aos='zoom-in-out'
            data-aos-delay='200'
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {isOpen ? "X" : "☰"}
          </span>
        </div>
      </div>
      <div
        className='s-menu'
        style={isOpen ? { height: "11.2rem", padding: "1rem" } : {}}
      >
        <a href='' className='menu-item'>
          Home
          <span className='underline'></span>
        </a>
        <a href='#work' className='menu-item' onClick={handleMenuClick}>
          Work
          <span className='underline'></span>
        </a>
        <a href='#skills' className='menu-item' onClick={handleMenuClick}>
          Skills
          <span className='underline'></span>
        </a>
        <a href='#contact' className='menu-item' onClick={handleMenuClick}>
          Contact
          <span className='underline'></span>
        </a>
        <a href='#about' className='menu-item'>
          About
          <span className='underline'></span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
