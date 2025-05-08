"use client";
import { aims } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFistRaised } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function AimsAndObjectives() {
  const [openModal, setOpenModal] = useState(false);
  const [aimId, setAimId] = useState<number>(0);

  const clickedAim = aims.find((aim) => aim?.id === aimId);

  useEffect(() => {}, [aimId]);

  return (
    <div id="our-programs" className="pt-8">
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Key Areas of Change
        </h2>
      </div>
      <p className="text-gray-500 text-xs text-center py-4">
        Our Aims and Objectives
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2 mt-0 lg:mt-4 px-0 lg:px-12 xl:px-36">
        {aims.map((data) => (
          <div
            key={data?.id}
            className={`flex flex-col lg:flex-row justify-start items-center lg:items-start gap-2 ${data?.picture} bg-cover bg-center h-auto lg:h-72 px-4 py-6 lg:py-16`}
          >
            <div className="bg-wine p-4 border-2 border-white">
              <FaFistRaised className="text-white text-2xl lg:text-5xl" />
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h1 className="text-xl lg:text-3xl font-medium text-white">
                {data?.name}
              </h1>
              <p className="text-center lg:text-left text-white pt-2 lg:pt-4 pb-4 lg:pb-8 text-sm lg:text-base">
                {data?.message}
              </p>
              <div
                onClick={() => {
                  setOpenModal(true), setAimId(data?.id);
                }}
                className="bg-white px-5 py-3 text-wine text-xs rounded-full cursor-pointer hover:bg-rose-300"
              >
                Read More...
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===Aims Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center bg-white">
          <div
            className={`w-full h-44 lg:h-72 ${clickedAim?.picture2!} bg-center bg-cover`}
          >
            <div className="flex justify-end items-center p-4 cursor-pointer">
              <div
                onClick={() => {
                  setOpenModal(false), setAimId(0);
                }}
                className="flex justify-center items-center gap-2 bg-white border-2 border-wine rounded-full p-2 text-xs"
              >
                <MdClose size={20} className=" hover:animate-spin" />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-12 px-4">
            <div className="text-center">
              <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
                {clickedAim?.name}
              </h2>
            </div>
            <p className="text-gray-700 text-xs lg:text-sm text-center py-4 underline underline-offset-2">
              {clickedAim?.message}
            </p>

            <p className="text-justify text-xs lg:text-sm">
              {clickedAim?.message2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AimsAndObjectives;
