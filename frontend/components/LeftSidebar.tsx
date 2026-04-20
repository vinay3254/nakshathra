"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  Calendar,
  House,
  Info,
  Phone,
  ShoppingCart,
  Star,
} from "lucide-react";

const items = [
  { href: "/", label: "HOME", icon: House },
  { href: "/events", label: "EVENTS", icon: Calendar },
  { href: "/contact", label: "CONTACT", icon: Phone },
  { href: "/about", label: "ABOUT US", icon: Info },
  { href: "/sponsors", label: "SPONSORS", icon: Star },
  { href: "/store", label: "STORE", icon: ShoppingCart },
];



export default function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeHref = useMemo(() => (pathname === "/" ? "/" : pathname), [pathname]);

  return (
    <motion.aside
      initial={{ x: -112 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sidebar-panel fixed left-0 top-[64px] z-50 hidden h-[calc(100%-64px)] w-[112px] md:flex md:flex-col"
    >
      <div className="flex flex-1 flex-col items-center justify-start pt-5">
        <div className="w-full">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeHref === item.href;

          return (
            <button
              key={item.href}
              type="button"
              onClick={() => router.push(item.href)}
              className={`flex w-full flex-col items-center gap-1.5 border-l-2 py-5 transition-all duration-200 ${
                isActive
                  ? "border-l-[#00f5ff]"
                  : "border-l-transparent"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className="h-[22px] w-[22px] transition-colors duration-200"
                style={{
                  color: isActive ? "#00f5ff" : "rgba(0, 245, 255,0.5)",
                }}
              />
              <span
                className="font-rajdhani text-[10px] font-semibold tracking-[0.1em] transition-colors duration-200"
                style={{
                  color: isActive ? "#00f5ff" : "rgba(0, 245, 255,0.4)",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
        </div>
      </div>
    </motion.aside>
  );
}
