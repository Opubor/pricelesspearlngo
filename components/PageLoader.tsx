import React from "react";
import { CgSpinner } from "react-icons/cg";

function PageLoader() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <CgSpinner className="animate-spin text-wine" size={50} />
    </div>
  );
}

export default PageLoader;
