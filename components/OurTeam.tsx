import { team } from "@/Data/data";
import React from "react";

function OurTeam() {
  return (
    <div className="py-8 px-2 lg:px-12 xl:px-36">
      <div>
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Our Team
        </h2>
      </div>
      <p className="text-gray-500 text-xs py-4">
        Meet the passionate minds driving our mission forward.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {team?.map((data) => (
          <div data-aos="fade-up" key={data?.id}>
            <div
              className={`${data?.picture} bg-cover bg-center w-full h-44 lg:h-72`}
            ></div>

            <h1 className="font-bold text-center pt-3">{data?.name}</h1>
            <p className="text-center text-wine text-xs">{data?.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
