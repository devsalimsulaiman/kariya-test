import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div>
      <div className="bg-white flex justify-between items-center w-full h-[100px] px-[40px]">
        <Image
          src={"/icons/kariya-logo.svg"}
          width={150}
          height={73}
          alt="kariyapay-logo"
          className="max-md:w-[100px]"
        />

        <div className="flex items-center gap-[41px] max-md:hidden">
          <span className="font-[400] text-[16px] text-primary-color">
            Home
          </span>
          <span className="font-[400] text-[16px] text-primary-color">
            Pricing
          </span>
          <span className="font-[400] text-[16px] text-primary-color">
            Faqs
          </span>
          <span className="font-[400] text-[16px] text-primary-color">
            Contact
          </span>
        </div>

        <div className="flex gap-[10px]">
          <Button children="Register" variant={"navBtn"} size={"navBtn"} />
          <Button
            children="Login"
            variant={"navBtn"}
            size={"navBtn"}
            className="bg-white text-primary-color border border-primary-color"
          />
        </div>
      </div>
    </div>
  );
}
