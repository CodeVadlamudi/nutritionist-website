import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactBox from "../components/ContactBox";
import ContactCTA from "../components/ContactCTA";

function ContactPage() {
  return (
    <div>
      <Header />
      <Contact />
      <ContactBox />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default ContactPage;
