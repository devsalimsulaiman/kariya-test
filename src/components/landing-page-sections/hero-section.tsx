import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full px-[100px]    max-md:px-[20px]">
      <div className="flex  h-auto md:max-lg:h-screen max-md:h-auto justify-between items-center gap-[10px]  md:max-lg:flex-col max-md:flex-col ">
        <div className="w-[50%]  flex flex-col gap-[35px] max-lg:w-full max-lg:items-center max-lg:text-center">
          <h1 className="font-[800] text-[72.18px] text-[#000000] max-md:text-[60.66px] max-md:font-[600]  leading-none max-md:leading-none">
            Secure Payments{" "}
            <span className="text-primary-color"> Made Simple</span>
          </h1>

          <p className="font-[500] text-[26px] text-gray-400 max-md:text-[23.54px]">
            Send and receive money easily, pay vendors or customers, and use
            escrow when extra protection is needed. Simple transfers when you
            want speed, escrow when you need trust.
          </p>

          <div className="flex gap-[21px] items-center max-md:flex-col">
            <a href="https://forms.gle/HmNdxGsDuUCud1uN9" target="_blank">
              <Button
                variant={"signupBtn"}
                size={"authBtn"}
                children="Start Your First Transaction"
                className=" max-md:w-full"
              />
            </a>
            <a href="/waitlist" className="max-md:w-full">
              <Button
                variant={"login"}
                size={"authBtn"}
                className="border-3 border-[#3FABDD]  text-[#3FABDD] max-md:w-full"
              >
                Watch Demo <img src="/icons/playIcon.svg" alt="play icon" />
              </Button>{" "}
            </a>
          </div>

          <div className="flex items-center gap-[30.45px] max-md:px-[20px]">
            <Stat figure="2.5B+" description="Secured in Escrow" />
            <Stat figure="50K+" description="Happy Users" />
            <Stat figure="99.9%" description="Success Rate" />
          </div>
        </div>
        <div className="w-[50%]   flex items-start justify-end max-lg:w-full ">
          <img src="/icons/heroImage.svg" alt="icon" className=" w-full" />
        </div>
      </div>
    </div>
  );
}

{
}

type StatProps = {
  figure: string;
  description: string;
};

const Stat = ({ figure, description }: StatProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-[700] text-[39.96px] max-md:text-[33.79px] text-[#000000]">
        {figure}
      </p>
      <p className="font-[500] text-[18.33px] max-md:text-[15.5px] text-gray-400">
        {description}
      </p>
    </div>
  );
};
