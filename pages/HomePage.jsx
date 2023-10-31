import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Price from "../components/Price";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Blog />
      <Testimonial />
      <Price />
      <Footer />
    </div>
  );
}

export default HomePage;
