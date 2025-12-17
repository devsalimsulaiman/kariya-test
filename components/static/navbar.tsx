"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Faqs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-white flex justify-between items-center w-full h-[100px] px-[40px] max-md:px-[20px] shadow-md">
        
        {/* Logo */}
        <Image
          src="/icons/kariya-logo.svg"
          alt="kariyapay-logo"
          width={250}
          height={73}
          className="
            h-auto
            w-[160px]
            sm:w-[220px]
            md:w-[230px]
            lg:w-[250px]
            max-md:landscape:w-[140px]
          "
        />

        {/* Desktop Links (ONLY md+) */}
        <nav className="hidden md:flex items-center gap-[41px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-[400] text-[16px] text-primary-color hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons (ONLY md+) */}
        <div className="hidden md:flex gap-[10px]">
          <Button variant="navBtn" size="navBtn">
            Register
          </Button>
          <Button
            variant="navBtn"
            size="navBtn"
            className="bg-white text-primary-color border border-primary-color"
          >
            Login
          </Button>
        </div>

        {/* Mobile + Mobile Landscape Hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-black" />
          <span className="block w-6 h-[2px] bg-black" />
          <span className="block w-6 h-[2px] bg-black" />
        </button>
      </header>

      {/* Side Drawer */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          {/* Drawer */}
          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition duration-300 ease-in-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition duration-300 ease-in-out"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative bg-white w-72 h-full p-6 flex flex-col gap-6 shadow-xl">
                
                {/* Close */}
                <button
                  className="self-end text-black text-3xl font-bold"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>

                {/* Links */}
                <nav className="flex flex-col gap-5 mt-4">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-[500] text-[18px] text-primary-color hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-4">
                  <Button className="w-full h-[44px] sm:h-[48px] text-base">
                    Register
                  </Button>
                  <Button
                    className="w-full h-[44px] sm:h-[48px] text-base bg-white text-primary-color border border-primary-color"
                  >
                    Login
                  </Button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
