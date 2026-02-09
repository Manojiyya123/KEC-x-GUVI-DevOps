import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Curriculum from "../components/Curriculum";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Curriculum />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
