"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./type";
import { HambergerMenu } from "iconsax-react";
 
export const MobileNavbar: React.FC<{ navItems: navItems[] }> = ({
  navItems,
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button className="flex md:hidden cursor-pointer"  onClick={() => setOpen(true)}>
         <HambergerMenu size={20} color="black"/>
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <button onClick={() => setOpen(false)}>x</button>
        </div>

        <nav className="flex flex-col gap-6 p-4">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
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
        </nav>
      </div>
    </>
  );
};
