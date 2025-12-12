// import React from "react";
// import { Button } from "../ui/button";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="bg-primary-color h-screen flex flex-col gap-[50px] items-center py-[0px] max-md:px-[20px]">
//       <div className="w- mx-auto space-y-[30px]  text-center">
//         <p className="font-[700] text-[96px] text-white leading-[94px] max-md:text-[40px] max-md:leading-[50px]">
//           Secure Payments <br /> Made{" "}
//           <span className="text-[#1F00CD]">Simple</span> .
//         </p>

//         <p className="font-[400] text-[18px] text-white leadingf-[28px] max-md:w-[80% max-md:mx-auto]">
//           Send and receive money easily, pay vendors or customers, and use
//           escrow when <br className="max-md:hidden" /> extra protection is
//           needed. Simple transfers when you want speed, escrow <br />{" "}
//           when you need trust.
//         </p>

//         <div className="flex gap-[20px] flex justify-center max-md:flex-col max-md:w-full ">
//           <Button
//             className="border border-[#7D52FD]"
//             children="Start your first Transactio"
//             variant={"bodyBtn"}
//             size={"bodyBtn"}
//           />

//           <Button
//             className="bg-white text-[#151022]"
//             children="Book a Demo"
//             variant={"bodyBtn"}
//             size={"bodyBtn"}
//           />
//         </div>
//       </div>

//       <div className=" w-full flex justify-center  max-md:hidden">
//         <Image
//           src={"/icons/monitor.svg"}
//           width={608}
//           height={203}
//           alt="dashboard"
//           className="  "
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-primary-color h-screen flex flex-col gap-[90px] items-center pt-[50px] max-md:px-[20px] relative">
      <div className="mx-auto space-y-[30px] text-center">
        <p className="font-[700] text-[96px] text-white leading-[94px] max-md:text-[40px] max-md:leading-[50px]">
          Secure Payments <br /> Made{" "}
          <span className="text-[#1F00CD]">Simple</span>.
        </p>

        <p className="font-[400] text-[18px] text-white leading-[28px] max-md:w-[80%] max-md:mx-auto">
          Send and receive money easily, pay vendors or customers, and use
          escrow when <br className="max-md:hidden" /> extra protection is
          needed. Simple transfers when you want speed, escrow <br /> when you
          need trust.
        </p>

        <div className="flex gap-[20px] justify-center max-md:flex-col max-md:w-full ">
          <Button
            className="border border-[#7D52FD]"
            children="Start your first Transaction"
            variant="bodyBtn"
            size="bodyBtn"
          />

          <Button
            className="bg-white text-[#151022]"
            children="Book a Demo"
            variant="bodyBtn"
            size="bodyBtn"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-md:hidden translate-y-[150px] ">
        <Image
          src="/icons/monitor.svg"
          width={500}
          height={100}
          alt="dashboard"
        />
      </div>
    </div>
  );
}
