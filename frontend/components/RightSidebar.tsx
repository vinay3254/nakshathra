"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const items = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "Twitter", icon: Twitter, href: "https://x.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Message", icon: MessageCircle, href: "/contact" },
  { label: "Phone", icon: Phone, href: "/contact" },
];

export default function RightSidebar() {
  const router = useRouter();

  const navigateTo = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(href);
  };

  return (
    <motion.aside
      initial={{ x: 112 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sidebar-panel fixed right-0 top-0 z-50 hidden h-full w-[112px] items-center justify-center md:flex"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => navigateTo(item.href)}
              aria-label={item.label}
              className="text-[rgba(0, 245, 255,0.45)] transition-all duration-200 hover:scale-[1.2] hover:text-[#00f5ff]"
              style={{
                filter: "drop-shadow(0 0 0 rgba(0,245,255,0))",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.filter =
                  "drop-shadow(0 0 8px rgba(0,245,255,0.6))";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.filter =
                  "drop-shadow(0 0 0 rgba(0,245,255,0))";
              }}
            >
              <Icon className="h-[18px] w-[18px]" />
            </button>
          );
        })}
      </div>
    </motion.aside>
  );
}
