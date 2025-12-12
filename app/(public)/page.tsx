import Explore from "@/components/sections/explore";
import HeroSection from "@/components/sections/hero-section";
import Ready from "@/components/sections/ready";
import SectionTwo from "@/components/sections/section-two";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <SectionTwo />
      <Explore />
      <Ready />
    </div>
  );
}
