"use client";
import { gallery } from "@/Data/data";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [galleryId, setGalleryId] = useState<number>(0);

  const clickedPicture = gallery.find((gallery) => gallery?.id === galleryId);

  useEffect(() => {}, [galleryId]);

  return (
    <div id="gallery">
      <div className="py-16">
        <div className="text-center">
          <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
            Our Gallery
          </h2>
        </div>
        <p className="text-gray-500 text-xs text-center py-4">
          A visual journey of our outreach, impact, and community-driven
          initiatives.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1">
        {gallery.map((data) => (
          <div
            key={data?.id}
            className="w-full h-44 lg:h-72 overflow-hidden transition duration-1000 ease-in-out"
          >
            <div
              onClick={() => {
                setOpenModal(true), setGalleryId(data?.id);
              }}
              key={data?.id}
              data-aos="fade-up"
              className={`${data?.picture} bg-center bg-cover w-full h-44 lg:h-72 hover:scale-110 overflow-hidden cursor-pointer`}
            ></div>
          </div>
        ))}
      </div>

      {/* ===Picture Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center border-2 border-white">
          <div
            key={clickedPicture?.id}
            data-aos="fade-up"
            className={`${clickedPicture?.picture} bg-center bg-cover w-full h-44 lg:h-72 flex justify-end items-start`}
          >
            <div
              onClick={() => {
                setOpenModal(false), setGalleryId(0);
              }}
              className="flex justify-center items-center gap-2 p-2 text-xl text-white font-extrabold cursor-pointer bg-gray-300/60"
            >
              <MdClose size={20} className=" hover:animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
