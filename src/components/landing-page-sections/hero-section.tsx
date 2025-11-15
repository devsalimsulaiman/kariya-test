import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full px-[100px] py-[100px] min-h-screen">
      <div className="flex justify-between gap-[10px]">
        <div className="w-[50%]  flex flex-col gap-[35px]">
          <h1 className="font-[800] text-[72.18px] text-[#000000]">
            Secure Payments{" "}
            <span className="text-primary-color"> Made Simple</span>
          </h1>

          <p className="font-[500] text-[26px] text-gray-400">
            KariyaPay acts as your trusted middleman, holding funds securely
            until both buyer and vendore are satisfied. Complete transparency,
            zero risk, maximum trust.
          </p>

          <div className="flex gap-[21px] items-center">
            <Button
              variant={"signupBtn"}
              size={"authBtn"}
              children="Start Your First Transaction"
            />

            <Button
              variant={"login"}
              size={"authBtn"}
              className="border-3 border-[#3FABDD]  text-[#3FABDD]"
            >
              Watch Demo <img src="/icons/playIcon.svg" alt="play icon" />
            </Button>
          </div>

          <div className="flex items-center gap-[30.45px]">
            <Stat figure="2.5B+" description="Secured in Escrow" />
            <Stat figure="50K+" description="Happy Users" />
            <Stat figure="99.9%" description="Success Rate" />
          </div>
        </div>
        <div className="w-[50%]   flex items-start justify-end">
          <img src="/icons/heroImage.svg" alt="icon" className=" w-full" />
        </div>
      </div>
    </div>
  );
}

type StatProps = {
  figure: string;
  description: string;
};

const Stat = ({ figure, description }: StatProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-[700] text-[39.96px] text-[#000000]">{figure}</p>
      <p className="font-[500] text-[18.33px] text-gray-400">{description}</p>
    </div>
  );
};
