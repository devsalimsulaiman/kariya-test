import React from "react";
import stars from "../assets/stars.png";
import whatsapp from "../assets/whatsapp.png";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
const Waitlist = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center from-[#f5fdf3] to-[#eff3ee] px-4 relative mt-20 mb-20">
      <div className="fixed top-6 left-6 lg:left-16 md:left-16 cursor-pointer">
        <button className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md">
          <IoIosArrowBack size={20} className="text-green-600" />
        </button>
      </div>

      <div className="flex justify-center mb-2">
        <img src={stars} alt="stars" className="w-32 h-32 object-contain" />
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-center text-black leading-snug mb-3">
        Join the waitlist for <br />
        <span className="text-[#91C730]">KariyaPay</span>
      </h1>

      <p className="text-[#000000] font-medium text-center mb-6 lg:text-xl text-sm">
        Stay informed about our latest updates
      </p>

      <form className="w-full max-w-xs lg:max-w-md md:max-w-sm space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#91C730] transition"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#91C730] transition"
        />
        <div className="mt-5 space-y-3">
          <button
            type="submit"
            className="w-full bg-[#91C730] text-white font-semibold py-3 rounded-md hover:bg-green-600 transition">
            Join waitlist
          </button>

          <button
            type="button"
            className="w-full bg-[#3FABDD] text-white font-semibold py-3 rounded-md hover:bg-[#2599d4] transition">
            Take a survey
          </button>
        </div>
      </form>

      <div className="flex justify-center space-x-10 mt-12">
        <FaXTwitter size={22} className="cursor-pointer hover:text-[#91C730]" />
        <FaInstagram
          size={22}
          className="cursor-pointer hover:text-[#91C730]"
        />
        <PiLinkedinLogoBold
          size={22}
          className="cursor-pointer hover:text-[#91C730]"
        />
        <TiSocialFacebookCircular
          size={26}
          className="cursor-pointer hover:text-[#91C730]"
        />
      </div>

      <div className="hidden lg:block lg:fixed lg:bottom-6 lg:right-16 z-10">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Waitlist;
