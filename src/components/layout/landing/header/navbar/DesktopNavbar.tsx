"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./type";

export const DesktopNavbar: React.FC<{ navItems: navItems[] }> = ({
  navItems,
}) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="  mx-auto hidden sm:flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm  font-medium transition-colors duration-200 ${
                active
                  ? "text-black font-semibold"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
