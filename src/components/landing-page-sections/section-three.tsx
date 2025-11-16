export default function SectionThree() {
  return (
    <div className="flex flex-col space-y-[50px] items-center justify-start py-[50px] bg-primary-color">
      <div className="w-[60%] md:max-lg:w-[80%] max-md:w-[90%]">
        <h1 className="text-center font-[800] text-[46px] text-white md:max-lg:text-[26.33px]">
          Trusted by Thousands
        </h1>
        <p className="font-[600] text-[26px] text-[#DBFF9C] text-center md:max-lg:text-[14.88px]">
          Join the growing community of buyers and vendors who rely on KariyaPay
          for secure transactions
        </p>
      </div>

      <div className="w-[70%] flex justify-between items-center md:max-lg:w-[80%] max-md:flex-col max-md:gap-[40px]">
        <Stat
          figure="2.5B+"
          description="Total Escrowed"
          desc="Funds secured safely"
        />

        <Stat
          figure="50K+"
          description="Active Users"
          desc="Buyers and vendors"
        />

        <Stat
          figure="99.9%"
          description="Success Rate"
          desc="Completed transactions"
        />

        <Stat
          figure="24/7"
          description="Sport Available"
          desc="Expert assistance"
        />
      </div>
    </div>
  );
}

type StatProps = {
  figure: string;
  description: string;
  desc: string;
};

const Stat = ({ figure, description, desc }: StatProps) => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <p className="font-[700] text-[39.96px] text-white md:max-lg:text-[31.31px]">
        {figure}
      </p>
      <p className="font-[500] text-[18.33px] text-[#DBFF9C] md:max-lg:text-[11.45px]">
        {description}
      </p>
      <p className="font-[500] text-[15px] text-[#B3FF2D] md:max-lg:text-[8.59px]">
        {desc}
      </p>
    </div>
  );
};
