"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
// In HeroSection.tsx
import React, { forwardRef } from "react";

interface HeroSectionProps {
  // Define any props that your HeroSection may use
  title?: string;
  description?: string;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (props, ref) => {
    return (
      <section id="hero" ref={ref} className=" bg-[#FFF0F5]">
        {/* Background Pattern */}

        <div className="container relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Family&apos;s Health is{" "}
              <span className="block text-[#E84B1C]">Our Priority</span>
            </h1>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              At WISS Hospitals, we are dedicated to providing world-class
              healthcare with a focus on super specialty services. Our
              state-of-the-art facilities and expert medical professionals
              ensure comprehensive care for you and your loved ones.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-[#E84B1C] text-white hover:bg-[#E84B1C]/90"
                size="lg"
              >
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#E84B1C] text-[#E84B1C] hover:bg-[#E84B1C]/90 hover:text-white"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Image Container with Gradient Border */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-[#E84B1C] to-[#008B9B] opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white">
              <Image
                src="/HeroPage.jpg"
                alt="WISSH Hospital care for mothers and children"
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

// Assigning display name to the component
HeroSection.displayName = "HeroSection";

export default HeroSection;
