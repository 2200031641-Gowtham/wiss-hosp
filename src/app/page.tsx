import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import {
  HeartPulse,
  Stethoscope,
  Syringe,
  Calendar,
  Image,
  Activity,
  Thermometer,
  UserCheck,
} from "lucide-react";

import GallerySection from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import DoctorsTeam from "@/components/DoctorsTeam";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "WISS Hospitals - Your Health, Our Priority",
  description:
    "WISS Hospitals offers comprehensive medical services including emergency care, surgery, specialized clinics, and more. With over 100 beds, we provide top-quality healthcare in Hyderabad.",
  keywords:
    "hospital, healthcare, emergency care, surgery, specialized clinics, Hyderabad",
};

export default function HomePage() {
  return (
    <div
      className={`${openSans.variable} font-sans min-h-screen flex flex-col bg-gray-50`}
    >
      <Navbar />

      <main id="main-content">
        <HeroSection />

        <section
          id="services"
          className="py-20 bg-[#FFF0F5]" // Updated background color
          aria-labelledby="services-title"
        >
          <div className="container mx-auto px-4">
            <h2
              id="services-title"
              className="text-3xl font-bold text-center mb-12 text-[#E84B1C]" // Updated text color
            >
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: HeartPulse,
                  title: "Emergency Care",
                  description:
                    "Rapid response and treatment for critical medical emergencies.",
                },
                {
                  icon: Syringe,
                  title: "Surgery",
                  description:
                    "Comprehensive surgical procedures performed by skilled specialists.",
                },
                {
                  icon: Stethoscope,
                  title: "Outpatient Services",
                  description:
                    "Convenient care and consultations for non-emergency conditions.",
                },
                {
                  icon: Image,
                  title: "Diagnostic Imaging",
                  description:
                    "State-of-the-art imaging technology for precise diagnoses.",
                },
                {
                  icon: Activity,
                  title: "Specialized Clinics",
                  description:
                    "Focused care in cardiology, orthopedics, neurology, and more.",
                },
                {
                  icon: Calendar,
                  title: "Appointments",
                  description:
                    "Easy scheduling for consultations and follow-up visits.",
                },
                {
                  icon: Thermometer,
                  title: "Laboratory Services",
                  description:
                    "Comprehensive lab testing and diagnostics to support treatment.",
                },
                {
                  icon: UserCheck,
                  title: "Patient Support",
                  description:
                    "Dedicated assistance and guidance for patients and families.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="transform hover:scale-105 transition duration-300 bg-white shadow-lg rounded-lg" // Added shadow and rounded corners
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <service.icon
                      className="w-12 h-12 text-[#E84B1C] mb-4" // Kept the icon color consistent
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-lg mt-10 text-gray-800">
              This hospital has a capacity of over <strong>100 beds</strong>.
            </p>
          </div>
        </section>

        <section id="doctors" className="py-20 bg-gray-100">
          <DoctorsTeam />
        </section>

        <section id="gallery" className="py-20 ">
          <GallerySection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <footer className="bg-[#E84B1C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">WISS Hospital</h2>
              <p className="text-lg italic">Opening Soon</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <address className="not-italic">
                <p className="mb-2">
                  Near YSR Statue, Road No:1, Ayyappa Society, Madhapur,
                  Hyderabad, 500081.
                </p>
                <p className="mb-2">
                  Phone:{" "}
                  <a href="tel:7277732777" className="hover:underline">
                    72777 32777
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:windfallhospitals@gmail.com"
                    className="hover:underline"
                  >
                    windfallhospitals@gmail.com
                  </a>
                </p>
              </address>
            </div>
            <nav aria-label="Footer Navigation">
              <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {["About Us", "Services", "Doctors", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="hover:underline transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="mt-8 border-t border-white pt-4 text-center text-sm">
            <p>© 2024 WISS Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
