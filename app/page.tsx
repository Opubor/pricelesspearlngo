import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import {
  FaBullseye,
  FaFacebook,
  FaFistRaised,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaChildren, FaSquareXTwitter } from "react-icons/fa6";
import { GrRestroomWomen } from "react-icons/gr";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdJoinFull, MdJoinInner, MdOutlineMailOutline } from "react-icons/md";
import { TbPlant } from "react-icons/tb";
import HeaderSwiper from "../components/HeaderSwiper";
import React from "react";
import {
  aims,
  blog,
  contactInformation,
  events,
  gallery,
  team,
} from "@/Data/data";
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
