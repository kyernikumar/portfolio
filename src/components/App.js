import "./App.css";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import Work from "./work/work";
import Skills from "./skill/skill";
import Contact from "./contact/contact";

import portifolioImg from "./images/portifolio-img.png";
import dashboardImg from "./images/dashboard.png";
import ecommerceImg from "./images/ecommerce-img.avif";
import moiveRating from "./images/movie-rating.png";

import ecommerceUi from "./images/e-commerce-mobile-app.png";
import deliveryUi from "./images/food-delivery-mobile-app.png";
import digitalBankingUi from "./images/Digital-Banking-Mobile-App.png";

const projects = [
  {
    image: portifolioImg,
    name: "Portifolio",
    tool: "HTML | CSS | REACT",
  },
  {
    image: moiveRating,
    name: "Movie Rating",
    tool: "React",
  },
  {
    image: ecommerceImg,
    name: "My Shopping",
    tool: "Tailwind | React",
  },
  {
    image: dashboardImg,
    name: "Dashboard",
    tool: "SQL | React",
  },
  {
    image: ecommerceImg,
    name: "My Shopping",
    tool: "Tailwind | React",
  },
  {
    image: moiveRating,
    name: "Movie Rating",
    tool: "React",
  },
];

const uiUxProjects = [
  {
    image: ecommerceUi,
    name: "Ecommerce Concept",
    tool: "",
  },
  {
    image: deliveryUi,
    name: "Online Foord Delivery ",
    tool: "",
  },
  {
    image: digitalBankingUi,
    name: "Digital Banking",
    tool: "",
  },
];

const skills = [
  ["UI UX Design", "Web Devlopment"],
  ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  ["Figma", "canva", "Adobe XD"],
];

const titles = ["Expertise", "Tech Stack", "Design Tools"];

function Footer() {
  return (
    <footer id='footer'>
      <div>
        © Copyright 2024, designed & developed by{" "}
        <span className='developer-name'> @Yerni Kumar</span>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Work projects={projects} heading='My Work' />
      <Work projects={uiUxProjects} heading='UI / UX  Designs' />
      <Skills skills={skills} titles={titles} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
