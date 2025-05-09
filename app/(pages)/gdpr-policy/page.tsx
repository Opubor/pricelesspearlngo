import { contactInformation } from "@/Data/data";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Page() {
  return (
    <div>
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          GDPR Compliance Statement
        </h2>
      </div>
      <p className="text-gray-500 text-xs text-center py-4">
        We comply with GDPR standards and prioritize your data protection
        rights.
      </p>

      <div className="px-2 lg:px-36 mt-8">
        {/* 1 */}
        <div>
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              1. Minimal Data Usage
            </h2>
          </div>
          <p className="text-sm mt-4">
            We do not collect or process personally identifiable information on
            this website.
          </p>
        </div>

        {/* 2 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              2. Cookies & Consent
            </h2>
          </div>
          <p className="text-sm mt-4">Our site uses only basic cookies to:</p>
          <ul className="list-disc">
            <li>Enable essential site functions</li>
            <li>Improve user experience</li>
          </ul>
          <p className="text-sm mt-4">
            You will be prompted to accept cookies on your first visit. You may
            decline cookies or adjust preferences through your browser settings.
          </p>
        </div>

        {/* 3 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              3. Your GDPR Rights
            </h2>
          </div>
          <p className="text-sm mt-4">
            Even though we do not collect personal data, we acknowledge your
            rights under GDPR:
          </p>
          <ul className="list-disc">
            <li>
              <span className="font-semibold">Right to Access</span> – You can
              request information about your data.
            </li>
            <li>
              <span className="font-semibold">Right to Erasure</span> – You can
              ask us to delete any data we may have (though we don’t retain
              any).
            </li>
            <li>
              <span className="font-semibold">Right to Object</span> – You can
              refuse cookies or any tracking.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="mt-8">
          <div>
            <h2 className="tracking-tighter relative inline-block text-xl lg:text-2xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
              4. Contact for GDPR Matters
            </h2>
          </div>
          <p className="text-sm mt-4">
            If you have any questions about how we align with GDPR, contact us:
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
