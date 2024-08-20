import React from "react";
import "./contact.css";
import vectorImg from "../images/green-vector-img.png";

function Contact() {
  return (
    <div
      className='container'
      data-aos='fade-up'
      data-aos-delay='200'
      id='contact'
    >
      <h1 className='section-heading'>Hire Me</h1>
      {/* <img src={vectorImg} /> */}
      <div className='contact'>
        <p className='hire-me-text' data-aos='fade-up' data-aos-delay='400'>
          Looking for a Passionate web developer skilled in design, development
          and branding. Let's create impactful online solutions together! I'm
          eager to join a new team of creatives. Let’s connect and see how we
          can collaborate to bring your vision to life!
        </p>
        <div className='icons'>
          <a
            className=''
            data-aos='fade-left'
            data-aos-delay='600'
            href='https://wa.me/917569932842'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg viewBox='0 0 24 24' className='text-white fill-none w-10 h-10'>
              <path
                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z'
                stroke='currentColor'
                stroke-width='1.5'
                stroke-linejoin='round'
              />
              <path
                d='M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118'
                stroke='currentColor'
                stroke-width='1.5'
              />
            </svg>
          </a>
          <a
            data-aos='fade-left'
            data-aos-delay='800'
            href='mailto:charankumar3264@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          </a>
          <a
            data-aos='fade-left'
            data-aos-delay='1000'
            href='https://www.linkedin.com/in/yernikumar'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          </a>
          <a
            data-aos='fade-left'
            data-aos-delay='1200'
            href='https://www.instagram.com/_yerni_kumar_'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
          <a
            data-aos='fade-left'
            data-aos-delay='1400'
            href='mailto:yernikumar1912@gmial.com'
          >
            {/* <FontAwesomeIcon icon={faGithub} /> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
