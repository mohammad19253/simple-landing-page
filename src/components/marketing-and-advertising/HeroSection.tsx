"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="p-5">
      <div className="container max-w-7xl grid grid-cols-9 gap-2 py-6 px-4 border border-gray-200 rounded bg-white sm:border-none sm:bg-transparent">
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-5 sm:py-12 flex-col md:col-span-3 col-span-9 items-center md:items-start order-2 md:order-1"
        >
          <h1 className="font-bold text-2xl">کمپین‌های بازاریابی و تبلیغاتی</h1>

          <p className="leading-8 font-medium max-w-112.5">
            آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان
            ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید.
          </p>

          <span>جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید</span>

          <button className="cursor-pointer rounded-md bg-purple-600 text-white w-fit px-4 py-2">
            دریافت مشاوره
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 col-span-9 order-1 md:order-2"
        >
          <Image
            src="/images/Frame 1503.png"
            alt="کمپین‌های بازاریابی و تبلیغاتی"
            width={800}
            height={800}
            className="h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};
