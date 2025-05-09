import { contactInformation } from "@/Data/data";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Page() {
  return (
    <div>
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Privacy Policy
        </h2>
      </div>
      <p className="text-gray-500 text-xs text-center py-4">
        We respect your privacy.
      </p>

      <div className="px-2 lg:px-36 mt-8">
        {/* 1 */}
        <div>
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              1. Personal Data Collection
            </h2>
          </div>
          <p className="text-sm mt-4">
            We do not collect, store, or share any personal data such as your
            name, email address, or contact details through this website.
          </p>
        </div>

        {/* 2 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              2. Cookies
            </h2>
          </div>
          <p className="text-sm mt-4">
            We use basic cookies to enhance your browsing experience. You will
            see a cookie consent banner when you visit the site. You can choose
            to accept or decline cookies. We do not use cookies for tracking,
            advertising, or profiling purposes.
          </p>
        </div>

        {/* 3 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              3. Embedded Content
            </h2>
          </div>
          <p className="text-sm mt-4">
            Some pages may include embedded maps (e.g., Google Maps). These
            services may collect limited technical data like your IP address or
            browser type to function.
          </p>
        </div>

        {/* 4 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              4. Data Security
            </h2>
          </div>
          <p className="text-sm mt-4">
            Though we do not collect personal data, we maintain strong website
            security to protect against unauthorized access or disruption.
          </p>
        </div>

        {/* 5 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              5. Your Control
            </h2>
          </div>
          <p className="text-sm mt-4">
            Since we don’t collect personal data, there’s nothing to delete or
            export. But you may clear cookies through your browser settings at
            any time.
          </p>
        </div>

        {/* 6 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              6. Contact
            </h2>
          </div>
          <p className="text-sm mt-4">
            If you have any concerns about privacy on this site, please contact
            us at:
          </p>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
            <MdOutlineMailOutline />
            {contactInformation?.at(0)?.email}
          </p>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
            <IoCallOutline />
            {contactInformation?.at(0)?.phone1}
          </p>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
            <IoCallOutline />
            {contactInformation?.at(0)?.phone2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
