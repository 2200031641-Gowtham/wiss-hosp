"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };

    const stagger = {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    return (
      <section id="hero" ref={ref} className="bg-[#FFF0F5]">
        <div className="container relative px-4 py-16 md:py-24">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              variants={fadeInUp}
            >
              Your Family&apos;s Health is{" "}
              <span className="block text-[#E84B1C]">Our Priority</span>
            </motion.h1>
            <motion.p
              className="mb-10 text-lg text-gray-600 md:text-xl"
              variants={fadeInUp}
            >
              At Windfall Hospitals, we are dedicated to providing world-class
              healthcare with a focus on super specialty services. Our
              state-of-the-art facilities and expert medical professionals
              ensure comprehensive care for you and your loved ones.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto mt-16 max-w-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          </motion.div>
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
