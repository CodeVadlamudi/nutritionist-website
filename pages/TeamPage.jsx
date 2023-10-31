import React from "react";
import Header from "../components/Header";
import Meet from "../components/Meet";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import TeamCTA from "../components/TeamCTA";

function TeamPage() {
  return (
    <div>
      <Header />
      <Meet />
      <ItemCard />
      <TeamCTA />
      <Footer />
    </div>
  );
}

export default TeamPage;
