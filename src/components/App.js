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
import FoodBarcodesImg from "./images/FoodBarcodes.png";
import ShoopingWithJSImg from "./images/ShoopingWithJS.png";
import MoiveRatingImg from "./images/MovieRatingImg.png";
import WeatherInfoImg from "./images/WeatherInfo.png";
import FoodVillaImg from "./images/FoodVilla.png";

import ecommerceUi from "./images/e-commerce-mobile-app.png";
import deliveryUi from "./images/food-delivery-mobile-app.png";
import digitalBankingUi from "./images/Digital-Banking-Mobile-App.png";

const projects = [
  {
    image: portifolioImg,
    name: "Portifolio",
    tool: "HTML | CSS | REACT",
    link: "https://portfolio-sable-two-73.vercel.app/",
  },
  {
    image: MoiveRatingImg,
    name: "Movie Rating",
    tool: "VTailwind | React",
    link: "https://movie-rating-smoky.vercel.app/",
  },
  {
    image: ShoopingWithJSImg,
    name: "Shopping",
    tool: "JavaScript",
    link: "https://ecommerce-main-tau.vercel.app/",
  },
  {
    image: FoodBarcodesImg,
    name: "FoodInfo",
    tool: "React",
    link: "https://food-barcodes.vercel.app/",
  },
  {
    image: FoodVillaImg,
    name: "FoodVilla",
    tool: "HTML | CSS | JavaScript",
    link: "https://food-restaurant-main.vercel.app/",
  },
  {
    image: WeatherInfoImg,
    name: "WeatherInfo",
    tool: "Tailwind | React",
    link: "https://wheatherinfo.vercel.app/",
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
        © Copyright 2025, designed & developed by{" "}
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
