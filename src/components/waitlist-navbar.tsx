import { Button } from "./ui/button";

export default function WaitListNavbar() {
  return (
    <div className="px-[100px] min-h-[126px] bg-[#FFFFFF] py-[10px] border-b">
      <div className="flex justify-between items-center">
        <img
          src="/icons/KariyaPay-logo.svg"
          alt="kariyapay logo"
          className="w-[96] h-[89px]"
        />

        <Button
          variant={"signupBtn"}
          children="Create Account"
          size={"authBtn"}
        />
      </div>
    </div>
  );
}
