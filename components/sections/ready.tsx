import { Button } from "../ui/button";

export default function Ready() {
  return (
    <div className="pt-[50px] pb-[90px] px-[76px] bg-gradient-to-b from-[#4FCF00E5] to-[#151022] space-y-[30px] max-md:px-[20px]">
      <p className="font-[600] text-white text-[64px] text-center max-md:text-[30px]">
        Ready To Get Started Now?
      </p>

      <p className="font-[400] text-[20px] text-[#FAFAFA99] text-center max-md:text-[15px]">
        Join the growing community of buyers and vendors who rely on KariyaPay{" "}
        <br />
        for secure transactions
      </p>

      <div className="flex justify-center gap-[20px] max-md:flex-col">
        <Button
          children="Login"
          variant={"bodyBtn"}
          size={"bodyBtn"}
          className="border border-white  bg-transparent"
        />

        <Button
          children="Book Demo"
          variant={"bodyBtn"}
          size={"bodyBtn"}
          className="border border-white  bg-white text-[#151022]"
        />
      </div>
    </div>
  );
}
