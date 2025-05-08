import { blog } from "@/Data/data";
import Link from "next/link";
import React from "react";

function BlogNews() {
  return (
    <div className="py-8 px-2 lg:px-12 xl:px-36">
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Blog News
        </h2>
      </div>

      <p className="text-gray-500 text-xs text-center py-4">
        Stories, updates, and insights from our journey.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4">
        {blog?.map((data) => (
          <div data-aos="fade-up" key={data?.id}>
            <div
              className={`${data?.picture} h-72 w-full bg-cover bg-center`}
            ></div>
            <div className="flex justify-start items-start gap-3 mt-4">
              <div>
                <h1 className="w-16 h-20 bg-wine text-white text-md flex justify-center items-center font-medium text-center">
                  {data?.day} <br></br> {data?.month}
                </h1>
                <h1 className="w-16 h-12 bg-lightWine text-white text-md flex justify-center items-center">
                  {data?.year}
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-sm lg:text-md uppercase">
                  {data?.title}
                </h1>
                <p className="text-sm text-gray-700 pt-2 pb-4 w-72 truncate">
                  {data?.paragraph1}
                </p>
                <Link
                  href={`/blog-news/${data?.id}`}
                  className="bg-white px-5 py-3 text-wine text-xs rounded-full shadow-lg shadow-gray-300 border"
                >
                  Read More...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogNews;
