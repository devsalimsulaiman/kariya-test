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
      <div className="bg-white flex justify-between items-center w-full h-[100px] px-[40px] max-md:px-[20px] shadow-md">
        <Image
  src="/icons/kariya-logo.svg"
  alt="kariyapay-logo"
  width={250}
  height={73}
  className="h-auto w-[120px] sm:w-[180px] md:w-[180px] lg:w-[250px]" 
/>


        {/* Desktop Links */}
        <div className="flex items-center gap-[41px] max-md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-[400] text-[16px] text-primary-color hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="flex gap-[10px] max-md:hidden">
          <Button children="Register" variant="navBtn" size="navBtn" />
          <Button
            children="Login"
            variant="navBtn"
            size="navBtn"
            className="bg-white text-primary-color border border-primary-color"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Side Drawer */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          {/* Drawer Panel */}
          <div className="fixed inset-0 flex z-50">
            <Transition.Child
              as={Fragment}
              enter="transform transition duration-300 ease-in-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition duration-300 ease-in-out"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative bg-white w-72 max-w-full h-full p-6 flex flex-col justify-start gap-6 shadow-xl">
                <button
                  className="self-end text-black text-3xl font-bold"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>

                {/* Menu Links */}
                <nav className="flex flex-col gap-4 mt-4">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-[500] text-[18px] text-primary-color hover:underline mb-4"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Buttons at bottom */}
                <div className="mt-auto flex flex-col gap-4">
                  <Button
                    children="Register"
                    variant="navBtn"
                    size="navBtn"
                    className="w-full sm:h-[48px] md:h-[52px] text-sm sm:text-base md:text-lg"
                  />
                  <Button
                    children="Login"
                    variant="navBtn"
                    size="navBtn"
                    className="bg-white text-primary-color border border-primary-color w-full sm:h-[48px] md:h-[52px] text-sm sm:text-base md:text-lg"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>

            {/* Empty div to allow clicking outside to close */}
            <div className="flex-shrink-0 w-0" aria-hidden="true" />
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
