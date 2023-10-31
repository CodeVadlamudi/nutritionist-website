import React from "react";
import Header from "../components/Header";
import AboutImage from "../components/AboutImage";
import AboutWelcome from "../components/AboutWelcome";
import Story from "../components/Story";
import Company from "../components/Company";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="bg-lime-50 h-full">
      <Header />
      <AboutImage />
      <AboutWelcome />
      <Story />
      <Company />
      <CTA />
      <Footer />
    </div>
  );
}

export default AboutPage;
