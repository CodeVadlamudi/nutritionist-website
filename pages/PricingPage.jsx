import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import PricingContent from "../components/PricingContent";
import FAQ from "../components/FAQ";

function PricingPage() {
  return (
    <div>
      <Header />
      <Pricing />
      <PricingContent />
      <FAQ />
      <Footer />
    </div>
  );
}

export default PricingPage;
