import React from "react";
import Header from "../components/Header";
import BlogHero from "../components/BlogHero";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <div>
      <Header />
      <BlogHero />
      <BlogCards />
      <Footer />
    </div>
  );
}

export default BlogPage;
