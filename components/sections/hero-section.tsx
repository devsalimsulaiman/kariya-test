import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-primary-color h-screen flex flex-col gap-[50px] items-center pt-[120px] relative">
      <div className="w- mx-auto space-y-[30px]  text-center">
        <p className="font-[700] text-[96px] text-white leading-[94px]">
          Secure Payments <br /> Made{" "}
          <span className="text-[#1F00CD]">Simple</span> .
        </p>

        <p className="font-[400] text-[18px] text-white leadingf-[28px]">
          Send and receive money easily, pay vendors or customers, and use
          escrow when <br /> extra protection is needed. Simple transfers when
          you want speed, escrow <br /> when you need trust.
        </p>

        <div className="flex gap-[20px] flex justify-center">
          <Button
            className="border border-[#7D52FD]"
            children="Start your first Transactio"
            variant={"bodyBtn"}
            size={"bodyBtn"}
          />

          <Button
            className="bg-white text-[#151022]"
            children="Book a Demo"
            variant={"bodyBtn"}
            size={"bodyBtn"}
          />
        </div>
      </div>

      <div className="border w-full flex justify-center z-20">
        <Image
          src={"/icons/monitor.svg"}
          width={608}
          height={203}
          alt="dashboard"
          className=" bottom-[-400px] "
        />
      </div>
    </div>
  );
}
