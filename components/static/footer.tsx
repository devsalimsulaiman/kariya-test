import Image from "next/image";
import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="px-[80px] py-[100px] bg-[#141415] max-md:px-[20px]">
      <div className="flex justify-between items-start border-t pt-[50px] max-md:flex-col max-md:gap-[30px] max-md:items-center">
        <Image
          src={"/icons/kariya-logo.svg"}
          width={249}
          height={73}
          alt="kariyapay-logo"
        />

        <FooterLinks
          link1="Home"
          link2="About Us"
          link3="Services"
          link4="Products"
          link5="Contact Us"
        />

        <FooterLinks link1="Linkedin" link2="Twitter" />

        <FooterLinks
          link1="Terms and Conditions"
          link2={<span>Copyright © {year} </span>}
        />
      </div>

      <div className="py-[40px] space-y-[20px]">
        <div className="flex gap-[32px]">
          <p className="font-[400] text-[14px] text-[#BDBDBD]">Terms of Use</p>
          <p className="font-[400] text-[14px] text-[#BDBDBD]">
            Privacy Policy
          </p>
          <p className="font-[400] text-[14px] text-[#BDBDBD]">About Cookies</p>
        </div>

        <p className="font-[400] text-[11px] text-[#BDBDBD]">
          Copyright © {year} Transparent. All rights reserved.
        </p>

        <p className="font-[400] text-[11px] text-[#BDBDBD]">
          This product focuses on providing organizations with tools to achieve
          financial transparency. It might include features for budgeting,
          expense tracking, financial reporting, and analytics to help
          businesses understand and <br /> communicate their financial health
          clearly.
        </p>
      </div>
    </div>
  );
}

type Links = {
  link1: string;
  link2: React.ReactNode;
  link3?: string;
  link4?: string;
  link5?: string;
};

const FooterLinks = ({ link1, link2, link3, link4, link5 }: Links) => {
  return (
    <div className=" flex flex-col gap-[16px]">
      <p className="font-[400] text-[15px] text-[#E0E0E0]">{link1}</p>
      <p className="font-[400] text-[15px] text-[#E0E0E0]">{link2}</p>
      <p className="font-[400] text-[15px] text-[#E0E0E0]">{link3}</p>
      <p className="font-[400] text-[15px] text-[#E0E0E0]">{link4}</p>
      <p className="font-[400] text-[15px] text-[#E0E0E0]">{link5}</p>
    </div>
  );
};
