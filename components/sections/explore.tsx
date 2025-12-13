import Image from "next/image";

export default function Explore() {
  return (
    <div className=" bg-white py-[90px] space-y-[100px] max-md:px-[20px]">
      <div className="space-y-[20px]">
        <p className="font-[600] text-[48px] text-black text-center ">
          Explore Kariyapay’s Features
        </p>

        <p className="font-[400] text-[18px]  text-black text-center ">
          KariyaPay is a smart payment wallet for easy transfers, secure escrow
          payments, <br className="max-md:hidden" /> and safe online
          transactions, built for buyers, sellers,{" "}
          <br className="max-md:hidden" /> and small businesses.
        </p>
      </div>

      <div className="pl-[150px] space-y-[40px] max-md:pl-0">
        <Card
          className="w-[40%] max-md:w-full"
          img="/icons/shield.svg"
          width={49}
          height={57}
          title="Secure Escrow Payments"
          paragraph="Buy and sell with confidence. Money stays  protected until delivery is confirmed."
        />

        <Card
          className="w-[60%] max-md:w-full"
          img="/icons/instant.svg"
          width={49}
          height={57}
          title="Instant Transfers"
          paragraph="Send money to any Nigerian bank or KariyaPay wallet in seconds — fast, reliable, and always available."
        />

        <Card
          className="w-[80%] max-md:w-full"
          img="/icons/payment.svg"
          width={49}
          height={57}
          title="Payment Links for Easy Collections"
          paragraph="Buy and sell with confidence. Moneystays  protected until delivery is confirmed."
        />
      </div>
    </div>
  );
}

type CardTypes = {
  img: string;
  title: string;
  paragraph: string;
  className: string;
  width: number;
  height: number;
};

const Card = ({
  img,
  className,
  paragraph,
  title,
  height,
  width,
}: CardTypes) => {
  return (
    <div
      className={` bg-white rounded-[24px]  p-[24px] ${className} flex items-center gap-[20px] shadow-2xl max-md:flex-col`}
    >
      <Image src={img} width={width} height={height} alt="card-icon" />{" "}
      <div className="space-y-[4px]">
        <p className="font-[700] text-[24px] text-primary-color max-md:text-center">
          {" "}
          {title}
        </p>
        <p className="font-[400] text-[17px] text-[#000000] max-md:text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
