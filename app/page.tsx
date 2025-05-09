import HeaderSwiper from "../components/HeaderSwiper";
import React from "react";
import Navbar from "../components/Navbar";
import AimsAndObjectives from "../components/AimsAndObjectives";
import Events from "../components/Events";
import Mission from "../components/Mission";
import AboutUs from "../components/AboutUs";
import FuelTheVision from "../components/FuelTheVision";
import Gallery from "../components/Gallery";
import OurTeam from "../components/OurTeam";
import BlogNews from "../components/BlogNews";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <HeaderSwiper />

      <AimsAndObjectives />

      <Events />

      <Mission />

      <AboutUs />

      <FuelTheVision />

      <Gallery />

      <OurTeam />

      <BlogNews />

      <ContactUs />

      <Footer />
    </div>
  );
}
