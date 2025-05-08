import { contactInformation } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactUs() {
  return (
    <div className="py-8 px-2 lg:px-12 xl:px-36">
      <div className="text-center">
        <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
          Contact Us
        </h2>
      </div>
      <p className="text-gray-500 text-xs text-center py-4">
        Feel free to reach out to us for any inquiries or collaboration.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pt-4 lg:pt-8">
        <div className="w-full lg:w-6/12">
          <div className="flex justify-start items-center gap-2">
            <div>
              <Image
                className="w-8 lg:w-10 h-8 lg:h-10"
                src={"/logo1.png"}
                width={4000}
                height={4000}
                alt="Logo"
              />
            </div>
            <div>
              <h1 className="text-wine font-bold text-md lg:text-2xl tracking-tight">
                Priceless Pearl Foundation
              </h1>
            </div>
          </div>
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
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
            <IoLocationOutline />
            {contactInformation?.at(0)?.address}
          </p>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4">
            <CiClock2 />
            {contactInformation?.at(0)?.openingHours}
          </p>
          <div className="mt-8 flex justify-start items-center gap-4">
            <Link href={contactInformation?.at(0)?.facebook!} target="blank">
              <FaFacebook className="text-xl" />
            </Link>
            <Link href={contactInformation?.at(0)?.twitter!} target="blank">
              <FaSquareXTwitter className="text-xl" />
            </Link>
            <Link href={contactInformation?.at(0)?.instagram!} target="blank">
              <FaInstagramSquare className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="w-96 lg:w-6/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.492488903948!2d5.729785885100776!3d5.511504783282778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041b2c043a48dc7%3A0x3e55b661dbfd2353!2sAgbasa%2C%20Warri%20332104%2C%20Delta!5e0!3m2!1sen!2sng!4v1746604621784!5m2!1sen!2sng"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
