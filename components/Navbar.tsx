"use client";
import { contactInformation } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdJoinFull } from "react-icons/md";

const navLinks = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "About Us", href: "/about-us" },
  { id: 2, name: "Our Programs", href: "/#our-programs" },
  { id: 3, name: "Events", href: "/#events" },
  { id: 4, name: "Blog", href: "/blog-news/1" },
  { id: 5, name: "Gallery", href: "/#gallery" },
  { id: 6, name: "Contact Us", href: "/contact-us" },
];

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const path = usePathname();

  const click = () => {
    if (openNavbar === true) {
      setOpenNavbar(false);
    } else if (openNavbar === false) {
      setOpenNavbar(true);
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-40">
        {/* 1 */}
        <div className="bg-white py-2 px-2 lg:px-12 xl:px-36 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
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
              <h1 className="text-wine font-bold text-md lg:text-2xl tracking-tight">
                PRICELESS PEARL FOUNDATION
              </h1>
              <p className="text-xs text-gray-500">
                Supporting Growth, Nurturing Potential
              </p>
            </div>
          </Link>
          <div className=" flex justify-start gap-2 pt-2 lg:pt-0">
            <Link
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="hover:bg-rose-950 hover:text-white flex justify-center items-center gap-1 border-wine border-2 rounded-full px-8 py-2 lg:py-3 text-xs text-wine"
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

        {/* 2 */}
        <div className="bg-gray-900 text-white text-xs flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center gap-10 px-4 lg:px-0 py-2 lg:py-4 border-b-8 border-wine">
          <div
            onClick={() => click()}
            className={`${
              openNavbar ? "hidden" : "flex lg:hidden"
            } cursor-pointer`}
          >
            <GiHamburgerMenu className="text-white text-2xl" />
          </div>
          <div
            onClick={() => click()}
            className={`${
              !openNavbar ? "hidden" : "flex lg:hidden"
            } cursor-pointer`}
          >
            <IoMdClose className="text-white text-2xl" />
          </div>
          <div
            className={`${
              openNavbar ? "flex" : "hidden lg:flex"
            } bg-gray-900 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10`}
          >
            {navLinks?.map((data) => (
              <Link
                key={data?.id}
                href={data?.href}
                className="hover:underline hover:underline-offset-2"
              >
                {data?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
