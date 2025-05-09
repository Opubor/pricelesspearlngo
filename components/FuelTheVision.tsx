import { contactInformation } from "@/Data/data";
import Link from "next/link";
import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { MdJoinFull } from "react-icons/md";

function FuelTheVision() {
  return (
    <div className="py-24 bg-[linear-gradient(to_right_bottom,rgba(128,0,0,0.5),rgba(128,0,0,0.5)),url('/pic3.jpg')] bg-center bg-cover bg-fixed flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl lg:text-5xl font-extrabold text-center bg-wine p-4">
        Fuel the Vision
      </h1>

      <p className="text-xs lg:text-sm text-white text-center mt-4 bg-gray-900 p-4 mx-2">
        Join us in transforming lives through education, empowerment, and
        sustainable development.<br></br> Your support—whether through time or
        giving—creates lasting change in rural communities.
      </p>

      <div className="flex gap-2 mt-8" data-aos="fade-up">
        <Link
          href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
          target="blank"
          className="flex justify-center items-center gap-1 rounded-full px-5 lg:px-16 py-3 lg:py-4 text-xs bg-white text-wine hover:bg-rose-950 hover:text-white"
        >
          <BiDonateHeart className="text-lg" />
          DONATE NOW
        </Link>
        <Link
          href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
          target="blank"
          className="flex justify-center items-center gap-1 rounded-full px-5 lg:px-16 py-3 lg:py-4 text-xs bg-white text-wine hover:bg-rose-950 hover:text-white"
        >
          <MdJoinFull className="text-xl" />
          VOLUNTEER
        </Link>
      </div>
    </div>
  );
}

export default FuelTheVision;
