import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Health from "../components/Health";
import Work from "../components/Work";
import WorkCTA from "../components/WorkCTA";

function ProcessPage() {
  return (
    <div>
      <Header />
      <Health />
      <Work />
      <WorkCTA />
      <Footer />
    </div>
  );
}

export default ProcessPage;
