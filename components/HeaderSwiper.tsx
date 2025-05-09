"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { contactInformation } from "../Data/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdJoinFull } from "react-icons/md";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { FaBullseye } from "react-icons/fa";

function HeaderSwiper() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url('/pic10.jpg')] bg-cover lg:h-screen w-full flex flex-col justify-start items-start px-2 lg:px-12 xl:px-36 pt-48 lg:pt-64 pb-8 lg:pb-0">
            <h1
              data-aos="fade-right"
              className="tracking-tighter bg-wine text-xl lg:text-4xl text-white font-extrabold py-4 px-4 uppercase"
            >
              Building Stronger Communities
            </h1>
            <p
              data-aos="fade-right"
              className="tracking-tighter bg-gray-900 text-sm lg:text-xl px-4 py-4 text-white mt-4 uppercase"
            >
              Empowering children, women and youth through education, skill
              development and agriculture
            </p>

            <div data-aos="fade-right" className="flex gap-2 mt-8">
              <Link
                href={"#events"}
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <FaBullseye className="text-lg" />
                See Our Work
              </Link>
              <Link
                href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                target="blank"
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <BiDonateHeart className="text-lg" />
                Donate
              </Link>
            </div>
            <Link
              data-aos="fade-right"
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="border-wine border-2 rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-wine hover:bg-rose-950 hover:text-white text-white mt-4 flex justify-center items-center gap-2"
            >
              <MdJoinFull className="text-xl" />
              Become a Part of Us
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/pic4.jpg')] bg-cover lg:h-screen w-full flex flex-col justify-start items-start px-2 lg:px-12 xl:px-36 pt-48 lg:pt-64 pb-8 lg:pb-0">
            <h1
              data-aos="fade-right"
              className="tracking-tighter bg-wine text-xl lg:text-4xl text-white font-extrabold py-4 px-4 uppercase"
            >
              Building Stronger Communities
            </h1>
            <p
              data-aos="fade-right"
              className="tracking-tighter bg-gray-900 text-sm lg:text-xl px-4 py-4 text-white mt-4 uppercase"
            >
              Empowering children, women and youth through education, skill
              development and agriculture
            </p>

            <div data-aos="fade-right" className="flex gap-2 mt-8">
              <Link
                href={"/"}
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <FaBullseye className="text-lg" />
                See Our Work
              </Link>
              <Link
                href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                target="blank"
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <BiDonateHeart className="text-lg" />
                Donate
              </Link>
            </div>
            <Link
              data-aos="fade-right"
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="border-wine border-2 rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-wine hover:bg-rose-950 hover:text-white text-white mt-4 flex justify-center items-center gap-2"
            >
              <MdJoinFull className="text-xl" />
              Become a Part of Us
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/pic2.jpg')] bg-cover lg:h-screen w-full flex flex-col justify-start items-start px-2 lg:px-12 xl:px-36 pt-48 lg:pt-64 pb-8 lg:pb-0">
            <h1
              data-aos="fade-right"
              className="tracking-tighter bg-wine text-xl lg:text-4xl text-white font-extrabold py-4 px-4 uppercase"
            >
              Building Stronger Communities
            </h1>
            <p
              data-aos="fade-right"
              className="tracking-tighter bg-gray-900 text-sm lg:text-xl px-4 py-4 text-white mt-4 uppercase"
            >
              Empowering children, women and youth through education, skill
              development and agriculture
            </p>

            <div data-aos="fade-right" className="flex gap-2 mt-8">
              <Link
                href={"/"}
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <FaBullseye className="text-lg" />
                See Our Work
              </Link>
              <Link
                href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                target="blank"
                className="rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-white hover:bg-rose-950 hover:text-white text-wine flex justify-center items-center gap-2"
              >
                <BiDonateHeart className="text-lg" />
                Donate
              </Link>
            </div>
            <Link
              data-aos="fade-right"
              href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
              target="blank"
              className="border-wine border-2 rounded-full px-6 lg:px-16 py-4 text-xs lg:text-sm bg-wine hover:bg-rose-950 hover:text-white text-white mt-4 flex justify-center items-center gap-2"
            >
              <MdJoinFull className="text-xl" />
              Become a Part of Us
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;
