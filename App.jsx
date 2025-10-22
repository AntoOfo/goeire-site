import Hero from "./components/Hero";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Destinations from "./components/Destinations";
import Discover from "./components/Discover";
import Navigate from "./components/Navigate";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Destinations />
      <Discover />
      <Navigate />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
