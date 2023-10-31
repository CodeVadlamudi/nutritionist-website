import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ProcessPage from "../pages/ProcessPage";
import PricingPage from "../pages/PricingPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";

function App() {
  return (
    <div className="bg-lime-50 h-full text-green-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
