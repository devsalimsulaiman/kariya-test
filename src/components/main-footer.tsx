import React from "react";
import { Button } from "./ui/button";
import { Copyright } from "lucide-react";

export default function MainFooter() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#111827] px-[50px] flex flex-col pb-[50px]">
      <div className="flex justify-between items-center  border-white border-b border-b-[#E2E8F0] py-[50px] max-md:flex-col max-md:gap-[40px]">
        <p className="font-[600] text-[60.96px] text-white md:max-lg:text-[19.89px] max-md:text-[40px]">
          Secure your transactions
        </p>
        <div className="flex items-center gap-[25.4px] max-md:flex-col max-md:w-full">
          <a href="/waitlist">
            <Button
              className="rounded-full md:max-lg:max-w-[119.93px] md:max-lg:text-[11.63px] max-md:w-full"
              variant={"signupBtn"}
              size={"authBtn"}
              children="Join the waitlist"
            />
          </a>

          <a href="/waitlist">
            <Button
              className="rounded-full md:max-lg:max-w-[119.93px] md:max-lg:text-[11.63px] max-md:w-full"
              variant={"login"}
              size={"authBtn"}
              children="Join the waitlist"
            />
          </a>
        </div>
      </div>

      <div className="max-md:flex-col  max-md:gap-[50px] py-[50px] flex justify-between border-b border-b-[#E2E8F0] md:max-lg:flex-col md:max-lg:gap-[50px]">
        <div className="space-y-[48.26px] w-[30%] md:max-lg:w-[50%] max-md:w-full">
          <img
            className="w-[96px] h-[89px]"
            src="/icons/KariyaPay-logo.svg"
            alt=""
          />
          <div className="space-y-[15px] ">
            <p className="font-[400] text-[20.32px] text-[#94A3B8] md:max-lg:text-[11.63px]">
              KariyaPay is a secure, user-friendly platform designed to simplify
              digital transactions for individuals and businesses. Whether
              you're sending money, receiving payments, or managing finances,
              KariyaPay ensures every transaction is fast, safe, and seamless.
            </p>

            <p className="font-[400] text-[20.32px] text-[#94A3B8] md:max-lg:text-[11.63px]">
              {" "}
              Join a growing community that trusts KariyaPay for reliable,
              real-time financial solutions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[82.55px] max-md:flex-col max-md:items-center">
          <FooterItems
            headers="Product"
            firstItem="How It Works"
            secondItem="Pricing"
            thirdItem="Security"
            fourthItem={"API Documentation"}
          />

          <FooterItems
            headers="Company"
            firstItem="About"
            secondItem="Blog"
            thirdItem={
              <div className="flex items-center gap-[10.16px] ">
                <p>Careers</p>{" "}
                <Button
                  children="New"
                  className="text-primary-color rounded-full"
                  variant={"login"}
                />
              </div>
            }
            fourthItem={"Press Kit"}
          />

          <FooterItems
            headers="Social Media"
            firstItem="Twitter"
            secondItem="Instagram"
            thirdItem="Linkedin"
            fourthItem={null}
          />

          <FooterItems
            headers="Resources"
            firstItem="Tutorials"
            secondItem="Blog"
            thirdItem="Community"
            fourthItem={"Privacy Policy"}
          />
        </div>
      </div>

      <div className="flex justify-center items-center py-[20px] w-full">
        <p className="font-[400] text-[20.32px] text-[#94A3B8] flex items-center">
          <Copyright /> {year} FluTech Creative
        </p>
      </div>
    </div>
  );
}

type ListItem = {
  headers: string;
  firstItem: string;
  secondItem: string;
  thirdItem: React.ReactNode;
  fourthItem: string | null;
};

const FooterItems = ({
  headers,
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
}: ListItem) => {
  return (
    <div className="flex flex-col gap-[30.48px] max-md:items-center">
      <p className="font-[700] text-[20.32px] text-white md:max-lg:text-[11.63px]">
        {headers}
      </p>
      <p className="font-[400] text-[20.32px] text-white md:max-lg:text-[11.63px]">
        {firstItem}
      </p>
      <p className="font-[400] text-[20.32px] text-white md:max-lg:text-[11.63px]">
        {secondItem}
      </p>
      <p className="font-[400] text-[20.32px] text-white md:max-lg:text-[11.63px]">
        {thirdItem}
      </p>
      <p className="font-[400] text-[20.32px] text-white md:max-lg:text-[11.63px]">
        {fourthItem}
      </p>
    </div>
  );
};
