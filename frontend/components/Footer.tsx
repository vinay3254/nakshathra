"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const columns = [
  {
    title: "Festival",
    links: [
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Schedule", href: "/schedule" },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Registration", href: "/store" },
      { label: "Accommodation", href: "/accommodation" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials = [Instagram, Linkedin, Youtube, Facebook];

export default function Footer() {
  return null;
}
