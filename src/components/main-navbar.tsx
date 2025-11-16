"use client";

import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import MobileNav from "./mobile-nav";

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

export default function MainNavbar() {
  const location = useLocation();

  return (
    <>
      <MobileNav />
      <div className="px-[100px] bg-[#FFFFFF] py-[5px]  max-lg:hidden min-lg:block">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="/icons/KariyaPay-logo.svg"
              alt="kariyapay logo"
              className="w-[96px] h-[89px]"
            />
          </Link>

          <nav className="relative flex items-center gap-[40px]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  tabIndex={0}
                  className={cn(
                    "relative font-[500] text-[20px] text-[#000000] outline-none transition-colors",
                    "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm",
                    isActive && "text-[#000000]"
                  )}
                  style={{ outline: "none" }}
                >
                  {item.label}

                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-[3px] bg-kariya-pay-color transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-[26px]">
            <Button variant="login" size="authBtn">
              Login
            </Button>

            <Link to="/waitlist">
              <Button variant="signupBtn" size="authBtn">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
