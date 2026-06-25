import React, { useEffect, useState } from "react";
import "@/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoastTool from "./components/RoastTool";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import WhyIdoes from "./components/WhyIdoes";
import Process from "./components/Process";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import { LOGO_URL } from "./lib/constants";

function App() {
  const [booting, setBooting] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App relative bg-[#0A0A0A]" data-testid="idoes-app">
      <CustomCursor />

      {booting && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center" data-testid="boot-screen">
          <img src={LOGO_URL} alt="IDOES" className="h-16 invert opacity-100" style={{ animation: "bootIn .9s ease forwards" }} />
        </div>
      )}

      <Navbar />
      <main>
        <Hero />
        <RoastTool />
        <About />
        <Services />
        <Work />
        <WhyIdoes />
        <Process />
        <Marquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        @keyframes bootIn {
          0% { opacity: 0; transform: scale(0.85); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.2; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;
