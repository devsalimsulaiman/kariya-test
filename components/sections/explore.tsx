import Image from "next/image";

const features = [
  {
    img: "/icons/shield.svg",
    title: "Secure Escrow Payments",
    paragraph:
      "Buy and sell with confidence. Money stays protected until delivery is confirmed.",
  },
  {
    img: "/icons/instant.svg",
    title: "Instant Transfers",
    paragraph:
      "Send money to any Nigerian bank or KariyaPay wallet in seconds — fast, reliable, and always available.",
  },
  {
    img: "/icons/payment.svg",
    title: "Payment Links for Easy Collections",
    paragraph:
      "Get paid by anyone, even if they don’t use KariyaPay. Just share your link and watch payments roll in.",
  },
  {
    img: "/icons/wallet.svg",
    title: "Business Wallet & NUBAN Account",
    paragraph:
      "Receive direct bank transfers through your personal NUBAN account powered by our payment partners.",
  },
  {
    img: "/icons/history.svg",
    title: "Smart Transaction Tracking",
    paragraph:
      "See every payment, escrow status, and wallet movement in one clean, organized timeline.",
  },
  {
    img: "/icons/online-business.svg",
    title: "Built for Online Vendors",
    paragraph:
      "From order confirmation to final payout, manage your sales smoothly with tools made for social media sellers.",
  },
];

export default function Explore() {
  return (
    <section className="bg-white py-[90px] px-[20px]">
      {/* Header */}
      <div className="max-w-[900px] mx-auto text-center space-y-[20px]">
        <p className="font-[600] text-[48px] text-black max-md:text-[34px]">
          Explore KariyaPay’s Features
        </p>

        <p className="font-[400] text-[18px] text-black max-md:text-[16px]">
          KariyaPay is a smart payment wallet for easy transfers, secure escrow
          payments, and safe online transactions — built for buyers, sellers,
          and small businesses.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-[80px] max-w-[1200px] mx-auto grid grid-cols-2 gap-[40px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {features.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
}
