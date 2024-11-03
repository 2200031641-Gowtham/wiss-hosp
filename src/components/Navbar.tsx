"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Our Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#hero" className="flex items-center space-x-2">
          <span className="text-2xl text-[#E84B1C]" aria-hidden="true">
            +
          </span>
          <span className="text-xl font-semibold text-[#E84B1C]">
            Windfall Hospitals
          </span>
          <span className="sr-only">Windfall Hospitals</span>
        </Link>

        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`
                text-md font-medium transition-colors hover:text-[#E84B1C]
                ${
                  isActive(item.href)
                    ? "text-[#E84B1C] font-bold"
                    : "text-gray-600"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          className="hidden items-center gap-2 rounded-full bg-[#E84B1C]/10 px-4 text-[#E84B1C] hover:bg-[#E84B1C]/20 hover:text-[#E84B1C] md:flex"
          asChild
        >
          <Link href="tel: 72777 32777">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span> 72777 32777</span>
            <span className="sr-only">Call us at 72777 32777</span>
          </Link>
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-2 md:hidden"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-lg font-medium hover:text-[#E84B1C]
                    ${isActive(item.href) ? "text-[#E84B1C] font-bold" : ""}
                  `}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="tel: 72777 32777"
                className="flex items-center gap-2 text-lg font-medium text-[#E84B1C]"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span> 72777 32777</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
