const features = [
  {
    icon: "/icons/send.svg",
    title: "Secure Escrow Payments",
    description:
      "Buy and sell with confidence. Money stays protected until delivery is confirmed.",
  },
  {
    icon: "/icons/pay.svg",
    title: " Instant Transfers",
    description:
      "Send money to any Nigerian bank or KariyaPay wallet in seconds — fast, reliable, and always available.",
  },
  {
    icon: "/icons/ccard.svg",
    title: "Payment Links for Easy Collections",
    description:
      "Get paid by anyone, even if they don’t use KariyaPay. Just share your link and watch payments roll in.",
  },
  {
    icon: "/icons/qr.svg",
    title: "Business Wallet & NUBAN Account",
    description:
      "Receive direct bank transfers through your personal NUBAN account powered by our payment partners.",
  },
  {
    icon: "/icons/reward.svg",
    title: "Smart Transaction Tracking",
    description:
      "See every payment, escrow status, and wallet movement in one clean, organized timeline.",
  },
  {
    icon: "/icons/save.svg",
    title: "Built for Online Vendors",
    description:
      "From order confirmation to final payout, manage your sales smoothly with tools made for social media sellers.",
  },
];

export default function SectionTwo() {
  return (
    <div className="py-[150px]  flex justify-center items-start">
      <div className="w-[80%]  flex flex-col gap-[150px] max-md:gap-[100px] max-md:w-full ">
        <div className="space-y-[10px] w-[60%] mx-auto md:max-lg:w-[100%] max-md:w-[90%]">
          <h1 className="font-[800] text-[48px] text-center leading-none max-md:leading-none">
            Explore Kariyapay’s Features
          </h1>
          <div className="w-[106px] h-[2px] bg-primary-color mx-auto"></div>

          <p className="font-[500] text-[28px] text-gray-400 text-center max-md:text-[23.5px]">
            KariyaPay is a smart payment wallet for easy transfers, secure
            escrow payments, and safe online transactions, built for buyers,
            sellers, and small businesses.
          </p>
        </div>

        <div
          className="grid gap-8
               /* mobile – 1 col */ 
               grid-cols-1
               /* iPad portrait – 2 col */ 
               min-md:max-lg:grid-cols-2
               /* desktop – 3 col */ 
               lg:grid-cols-3
               justify-center"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="max-w-[356px] mx-auto bg-[#F6FFE733] p-[30px] 
                 shadow-xl min-h-[265px] flex flex-col items-center 
                 gap-[22px] text-center rounded-[13px]"
            >
              <img src={item.icon} alt="" />

              <p
                className={` font-[600] text-[24px]  ${
                  item.title === "Send, and Receive Money" ||
                  item.title === "Pay Bills" ||
                  item.title === "Virtual Cards"
                    ? "text-kariya-pay-color"
                    : "text-primary-color"
                }`}
              >
                {item.title}
              </p>

              <p className="font-[500] text-[16px] text-[#000000]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
