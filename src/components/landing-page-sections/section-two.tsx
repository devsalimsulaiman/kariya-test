const features = [
  {
    icon: "/icons/send.svg",
    title: "Send, and Receive Money",
    description:
      "Our platform offers different ways for you to send and receive money money conveniently without any hassle",
  },
  {
    icon: "/icons/pay.svg",
    title: "Pay Bills",
    description:
      "Pay bills easily and conveniently on our platform. Pay Internet, Cable TV, or Internet bills.",
  },
  {
    icon: "/icons/ccard.svg",
    title: "Virtual Cards",
    description:
      "Get both Naira, and Dollar virtual cards to make easy transactions online, we do not charge you on transactions.",
  },
  {
    icon: "/icons/qr.svg",
    title: "Create QR Codes",
    description:
      "Create QR Codes to receive payments easily by assigning QR code to specific user.",
  },
  {
    icon: "/icons/reward.svg",
    title: "Reward Other Users",
    description:
      "You can also create QR Codes to reward users on the platform by assigning to specific users.",
  },
  {
    icon: "/icons/save.svg",
    title: "Save, and Invest",
    description:
      "You can save your money in Naira, or Dollar. You can also invest in stocks on our platfom.",
  },
];

export default function SectionTwo() {
  return (
    <div className="pb-[150px] flex justify-center items-start">
      <div className="w-[80%]  flex flex-col gap-[150px] max-md:w-full ">
        <div className="space-y-[10px] w-[60%] mx-auto md:max-lg:w-[100%] max-md:w-[90%]">
          <h1 className="font-[800] text-[48px] text-center">
            Explore Kariyapay’s Features
          </h1>
          <div className="w-[106px] h-[2px] bg-primary-color mx-auto"></div>

          <p className="font-[500] text-[28px] text-gray-400 text-center max-md:text-[23.5px]">
            Scandapay is a fintech solution that allows users make payment for
            goods purchased by scanning a QR Code. Scandapay also offers other
            amazing features.
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
