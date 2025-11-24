import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export default function MobileNav() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();

  return (
    <div className="min-lg:hidden py-[10px] px-[40px] flex justify-between items-center min-lg:hidden">
      <Link to="/">
        <img
          src="/icons/KariyaPay-logo.svg"
          alt="KariyaPay logo"
          className="w-[96px] h-[89px]"
        />
      </Link>

      {!openSidebar && (
        <FaBars
          onClick={() => setOpenSidebar(true)}
          className="w-[51px] h-[51px] cursor-pointer"
        />
      )}

      {openSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpenSidebar(false)}
        >
          <div
            className="min-w-[317px] max-md:w-full rounded-[21px] space-y-[20px] border pb-[50px] p-[20px] 
                       fixed right-10 max-md:right-0 top-10 z-50 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <FaTimes
                onClick={() => setOpenSidebar(false)}
                className="w-[45px] h-[45px] cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center gap-[30px] relative">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenSidebar(false)}
                    className={cn(
                      "relative font-[500] text-[23px] text-[#000000] opacity-60 transition-all",
                      isActive && "opacity-100 font-[600]"
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <span
                        className="absolute -bottom-2 left-0 right-0 h-[3px] bg-kariya-pay-color rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-[50px] flex flex-col gap-[5px]">
              <a
                href="https://forms.gle/HmNdxGsDuUCud1uN9"
                target="_blank"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="h-[55.67px] w-full rounded-[14.33px] border-2 border-primary-color text-primary-color"
                >
                  Login
                </Button>
              </a>
              <a
                href="https://forms.gle/HmNdxGsDuUCud1uN9"
                target="_blank"
                className="w-full"
              >
                {" "}
                <Button className="h-[55.67px] w-full rounded-[14.33px] bg-primary-color text-white">
                  Create Account
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
