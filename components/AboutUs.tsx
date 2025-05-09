import React from "react";

function AboutUs() {
  return (
    <div className="py-8 px-2 lg:px-12 xl:px-36">
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          About Us
        </h2>
      </div>
      <p className="text-gray-500 text-xs text-center py-4">
        Founded to empower communities through education and sustainability.
      </p>

      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-4 pt-4"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-6/12 h-72 bg-[url('/pic8.jpg')] bg-cover bg-center"></div>
        <div className="w-full lg:w-6/12">
          <p className="text-sm pb-4 text-justify">
            Priceless Pearl Foundation, founded in [Year], is dedicated to
            transforming communities through education, empowerment, and
            sustainability. We provide quality education to children in rural
            areas, empower women to lead societal change, and equip youth and
            women with vocational skills for self-reliance. Our agricultural
            initiatives promote sustainability and self-sufficiency, helping
            communities thrive.
          </p>
          <p className="text-sm pb-4 text-justify">
            With a strong focus on creating lasting impact, we are committed to
            fostering growth, opportunity, and resilience for a brighter future.
          </p>
          <p className="text-sm pb-4 text-justify">
            Born from a deep desire to transform underserved communities, our
            organization was founded with a simple mission—to bring hope where
            it’s needed most. What began as small acts of service has grown into
            a movement of change, spanning villages, cities, and lives across
            Nigeria. Our journey is a testimony to the power of compassion,
            dedication, and collective action.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
