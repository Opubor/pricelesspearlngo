"use client";
import { events } from "@/Data/data";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function Events() {
  const [openModal, setOpenModal] = useState(false);
  const [eventId, setEventId] = useState<number>(0);

  const clickedEvent = events.find((event) => event?.id === eventId);

  useEffect(() => {}, [eventId]);

  return (
    <div id="events" className="pt-8 pb-8 px-2 lg:px-12 xl:px-36">
      <div>
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Events
        </h2>
      </div>
      <p className="text-gray-500 text-xs pt-2 pb-4">
        Highlights of our impactful community events and initiatives.
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4"
        data-aos="fade-up"
      >
        {events.map((data) => (
          <div
            onClick={() => {
              setOpenModal(true), setEventId(data?.id);
            }}
            key={data?.id}
            className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2 h-auto lg:h-40 cursor-pointer hover:bg-gray-100"
          >
            <div
              className={`${data?.picture} h-44 lg:h-full bg-cover bg-center w-full lg:w-4/12 flex items-end flex-col`}
            >
              <div>
                <h1 className="w-16 lg:w-20 h-12 lg:h-16 bg-wine text-white text-xl lg:text-2xl flex justify-center items-center lg:font-extrabold">
                  {data?.day}
                </h1>
                <h1 className="w-16 lg:w-20 h-10 lg:h-12 bg-gray-700 text-white text-lg lg:text-xl flex justify-center items-center">
                  {data?.month}
                </h1>
              </div>
            </div>
            <div className="w-full lg:w-8/12">
              <h1 className="font-bold text-sm uppercase">{data?.name}</h1>
              <p className="flex items-center text-xs gap pt-1">
                <CiLocationOn className="text-sm" /> {data?.location}
              </p>

              <p className="text-sm pt-4 truncate">{data?.description}</p>
              <div className="flex justify-start mt-2 lg:mt-4">
                <div className="bg-white shadow-lg shadow-gray-200 border border-gray-200 px-5 py-3 text-wine text-xs rounded-full cursor-pointer hover:bg-rose-300">
                  Read More...
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ===Events Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center bg-white">
          <div
            className={`${clickedEvent?.picture} h-44 lg:h-56 bg-cover bg-center w-full flex items-end flex-col`}
          >
            <div>
              <div
                onClick={() => {
                  setOpenModal(false), setEventId(0);
                }}
                className="flex justify-center items-center gap-2 p-2 text-xl text-white font-extrabold cursor-pointer bg-gray-900/80"
              >
                <MdClose size={20} className=" hover:animate-spin" />
              </div>
              <h1 className="w-16 lg:w-20 h-12 lg:h-16 bg-wine text-white text-xl lg:text-2xl flex justify-center items-center lg:font-extrabold">
                {clickedEvent?.day}
              </h1>
              <h1 className="w-16 lg:w-20 h-10 lg:h-12 bg-gray-700 text-white text-lg lg:text-xl flex justify-center items-center">
                {clickedEvent?.month}
              </h1>
            </div>
          </div>

          <div className="w-full px-4 pt-4 pb-16">
            <h1 className="font-bold text-sm uppercase">
              {clickedEvent?.name}
            </h1>
            <p className="flex items-center text-xs gap pt-1">
              <CiLocationOn className="text-sm" /> {clickedEvent?.location}
            </p>

            <p className="text-sm text- pt-4">{clickedEvent?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
