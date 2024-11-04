"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:windfallhospitals@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="contact-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Get in Touch
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            We&apos;re here to help and answer any questions you might have
            about Windfall Hospitals. We look forward to hearing from you.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-[#FFF0F5] p-8">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-[#E84B1C]" aria-hidden="true" />
                <a href="tel:7277732777" className="hover:underline">
                  72777 32777
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-[#E84B1C]" aria-hidden="true" />
                <a
                  href="mailto:windfallhospitals@gmail.com"
                  className="hover:underline"
                >
                  windfallhospitals@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-[#E84B1C]" aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=YSR+Statue+Y+S+Rajasekhara+Reddy+Statue,+100+Feet+Rd,+Ayyappa+Society,+Siddhi+Vinayak+Nagar,+Madhapur,+Hyderabad,+Telangana+500081"
                  target="_blank"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#E84B1C] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#E84B1C] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#E84B1C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E84B1C] text-white hover:bg-[#E84B1C]/90 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
