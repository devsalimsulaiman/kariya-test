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
      <header className="bg-white flex justify-between items-center w-full
        h-[80px] sm:h-[90px] md:h-[100px]
        px-[20px] sm:px-[30px] md:px-[40px]
        shadow-md">

        {/* Logo */}
        <Image
          src="/icons/kariya-logo.svg"
          alt="kariyapay-logo"
          width={250}
          height={73}
          className="
            h-auto
            w-[140px] sm:w-[160px] md:w-[200px] lg:w-[250px]
            landscape:w-[140px]
          "
        />

        {/* Desktop Links */}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-[10px]">
          <Button variant="navBtn" size="navBtn">Register</Button>
          <Button
            variant="navBtn"
            size="navBtn"
            className="bg-white text-primary-color border border-primary-color"
          >
            Login
          </Button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="relative w-8 h-6 md:hidden"
        >
          <span
            className={`absolute h-[2px] w-full bg-black transition-all duration-300
              ${isOpen ? "rotate-45 top-3" : "top-0"}
            `}
          />
          <span
            className={`absolute h-[2px] w-full bg-black transition-all duration-300
              ${isOpen ? "opacity-0" : "top-3"}
            `}
          />
          <span
            className={`absolute h-[2px] w-full bg-black transition-all duration-300
              ${isOpen ? "-rotate-45 top-3" : "top-6"}
            `}
          />
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
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px]" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition duration-300 ease-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition duration-300 ease-in"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="
                bg-white w-72 max-w-full h-full
                p-6 flex flex-col gap-6 shadow-xl
              ">
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="self-end text-3xl font-bold"
                >
                  &times;
                </button>

                {/* Links */}
                <nav className="flex flex-col gap-5 mt-6">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[18px] font-[500] text-primary-color hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-4">
                  <Button
                    variant="navBtn"
                    size="navBtn"
                    className="w-full h-[48px] text-base"
                  >
                    Register
                  </Button>
                  <Button
                    variant="navBtn"
                    size="navBtn"
                    className="w-full h-[48px] bg-white text-primary-color border border-primary-color text-base"
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
