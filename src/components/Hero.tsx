"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <section id="hero" ref={ref} className="bg-[#FFF0F5]">
        <div className="container relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Family&apos;s Health is{" "}
              <span className="block text-[#E84B1C]">Our Priority</span>
            </h1>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              At Windfall Hospitals, we are dedicated to providing world-class
              healthcare with a focus on super specialty services. Our
              state-of-the-art facilities and expert medical professionals
              ensure comprehensive care for you and your loved ones.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                className="bg-[#E84B1C] text-white hover:bg-[#E84B1C]/90"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Book an Appointment
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#E84B1C] text-[#E84B1C] hover:bg-[#E84B1C]/90 hover:text-white"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>

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

        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
