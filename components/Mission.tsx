import React from "react";

function Mission() {
  return (
    <div className="py-8 px-2 lg:px-12 xl:px-36 bg-gray-50">
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Our Mission
        </h2>
      </div>

      <p className="text-gray-500 text-xs text-center py-4">
        Changing lives through learning, skills, and hope.
      </p>

      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-4 pt-4"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-6/12">
          <p className="text-sm pb-4 text-justify">
            At Priceless Pearl Foundation, we are committed to transforming
            communities by providing children in rural areas with quality
            education, helping them unlock their potential and build a better
            future. We believe education is the key to long-term change.
          </p>
          <p className="text-sm pb-4 text-justify">
            We focus on empowering women by encouraging them to engage in
            discussions about their vital role in shaping stronger societies. We
            offer opportunities for women to gain skills, confidence, and become
            leaders in their communities.
          </p>
          <p className="text-sm pb-4 text-justify">
            Our mission also includes equipping youth and women with vocational
            skills that foster independence and economic opportunity. Through
            agricultural initiatives, we promote self-sufficiency and
            sustainability, helping communities thrive by growing their own
            resources and creating jobs.
          </p>
        </div>
        <div className="w-full lg:w-6/12 h-72 bg-[url('/pic5.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
}

export default Mission;
