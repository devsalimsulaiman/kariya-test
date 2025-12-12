import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="bg-white pt-[300px] space-y-[30px]">
      <div className="space-y-[20px] text-center">
        <p className="font-[600] text-[48px] text-[#000000]">What we Offer</p>
        <p className="font-[400] text-[16px] text-[#000000] leading-[28px]">
          At <span className="text-primary-color">Kariyapay</span> , we aim to
          empower African businesses to seamlessly connect with the global
          market. By offering <br /> innovative payment solutions and business
          tools, we strive to enhance business operations, cut losses, increase
          sales, <br /> and improve overall efficiency.
        </p>
      </div>

      <div className="flex justify-center gap-[30px]">
        <Image src={"/icons/offer1.svg"} height={386} width={450} alt="card1" />
        <Image src={"/icons/offer2.svg"} height={386} width={450} alt="card1" />
        <Image src={"/icons/offer2.svg"} height={386} width={450} alt="card1" />
      </div>
    </div>
  );
}
