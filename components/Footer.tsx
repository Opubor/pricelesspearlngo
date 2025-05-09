import { contactInformation } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdJoinFull, MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-16">
      <div className="py-16 px-2 lg:px-12 xl:px-36 bg-gray-900 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
        <div>
          <Link href={"/"} className="flex justify-start items-center gap-2">
            <div>
              <Image
                className="w-8 lg:w-10 h-8 lg:h-10"
                src={"/logo1.png"}
                width={4000}
                height={4000}
                alt="Logo"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-md lg:text-2xl tracking-tight">
                Priceless Pearl Foundation
              </h1>
              <p className="text-xs text-gray-500">
                Supporting Growth, Nurturing Potential
              </p>
            </div>
          </Link>

          <div className="text-white mt-8">
            <Link
              href={`mailto:${contactInformation?.at(0)?.email!}`}
              target="blank"
              className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4"
            >
              <MdOutlineMailOutline />
              {contactInformation?.at(0)?.email}
            </Link>
            <Link
              href={`tel:${contactInformation?.at(0)?.phone1!}`}
              target="blank"
              className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4"
            >
              <IoCallOutline />
              {contactInformation?.at(0)?.phone1}
            </Link>
            <Link
              href={`tel:${contactInformation?.at(0)?.phone2!}`}
              target="blank"
              className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4"
            >
              <IoCallOutline />
              {contactInformation?.at(0)?.phone2}
            </Link>
            <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
              <IoLocationOutline />
              {contactInformation?.at(0)?.address}
            </p>
            <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
              <CiClock2 />
              {contactInformation?.at(0)?.openingHours}
            </p>
          </div>
        </div>

        <div className="text-white flex flex-col justify-start items-center">
          <h1 className="font-medium text-white underline underline-offset-2">
            USEFUL LINKS
          </h1>
          <Link href={"/"} className="text-xs lg:text-sm mt-4 hover:underline">
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            About Us
          </Link>
          <Link
            href={"/#our-programs"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Our Programs
          </Link>
          <Link
            href={"/#events"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Events
          </Link>
          <Link
            href={"/blog-news/1"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Blog
          </Link>
          <Link
            href={"/#gallery"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Gallery
          </Link>
          <Link
            href={"/contact-us"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Contact Us
          </Link>
          <Link
            href={"/privacy-policy"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/gdpr-policy"}
            className="text-xs lg:text-sm mt-4 hover:underline"
          >
            GDPR Policy
          </Link>
        </div>
        <div className="text-white flex flex-col justify-start items-center">
          <h1 className="font-medium text-white underline underline-offset-2">
            SOCIALS
          </h1>
          <div className="mt-4 flex justify-center items-center gap-4">
            <Link href={contactInformation?.at(0)?.facebook!} target="blank">
              <FaFacebook className="text-xl" />
            </Link>
            <Link href={contactInformation?.at(0)?.twitter!} target="blank">
              <FaSquareXTwitter className="text-xl" />
            </Link>
            <Link href={contactInformation?.at(0)?.instagram!} target="blank">
              <FaInstagramSquare className="text-xl" />
            </Link>
          </div>

          <div className="mt-8 flex justify-start gap-2 pt-2 lg:pt-0">
            <Link
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="hover:bg-rose-950 hover:text-white flex justify-center items-center gap-1 border-white border-2 rounded-full px-8 py-2 lg:py-3 text-xs text-white"
            >
              <BiDonateHeart className="text-lg" />
              Donate Now
            </Link>
            <Link
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="hover:bg-white hover:text-rose-950 hover:border-rose-950 border-2 border-wine flex justify-center items-center gap-1 text-white bg-wine rounded-full text-xs px-8 py-2 lg:py-3"
            >
              <MdJoinFull className="text-xl" />
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-lightWine py-4">
        <h1 className="tracking-tighter font-extrabold text-xl lg:text-3xl text-center text-white">
          BUILDING STRONGER COMMUNITIES
        </h1>
      </div>

      <div className="bg-wine py-4">
        <h1 className="text-white text-xs lg:text-sm text-center">
          © 2025 Priceless Pearl Foundation. All rights reserved.
        </h1>
        <p className="text-xs text-white text-center mt-4">
          Website built by Opubor Tony |{" "}
          <Link href={`https://wa.me/+2349139124809`} target="blank">
            +234 913 912 4809
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
