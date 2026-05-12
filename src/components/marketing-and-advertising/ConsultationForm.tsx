"use client";

import { Call, ProfileCircle, Sms } from "iconsax-react";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared-ui/Input";
import { formSchema, FormSchema } from "./type";
import { useState } from "react";

export const ConsultationForm = ({
  servicesList,
}: {
  servicesList: string[];
}) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = watch("services");

  const toggleService = (service: string) => {
    const exists = selectedServices.includes(service);

    const updated = exists
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];

    setValue("services", updated);
  };

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("فرم ارسال شد", data);
      toast.success("درخواست شما با موفقیت ثبت شد");
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-4 p-5 container max-w-7xl ">
      <div className="text-center mb-5 space-y-2">
        <h2 className="text-xl font-bold">فرم دریافت مشاوره</h2>
        <p className="text-sm mt-4">
          برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید
          تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8  bg-white rounded-md border border-gray-200  p-8"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <Input
            icon={<ProfileCircle size={20} color="red" />}
            label="نام و نام خانوادگی"
            placeholder="نام خود را وارد کنید"
            error={errors.fullName?.message}
            {...register("fullName")}
          />

          <Input
            icon={<Sms size={20} color="red" />}
            label="آدرس ایمیل"
            placeholder="email@mail.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            icon={<Call size={20} color="red" />}
            label="شماره تماس"
            placeholder="0912..."
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
        <div>
          <p className="font-semibold mb-3">
            نوع سرویس (ها) مورد نظر خود را انتخاب کنید:
          </p>

          <div className="grid  grid-cols-4 md:grid-cols-5 gap-3">
            {servicesList.map((item, index) => {
              const active = selectedServices.includes(item);

              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleService(item)}
                  className={`${servicesList.length % 2 === 1 && index === servicesList.length - 1 ? "col-span-4 sm:col-span-1" : "col-span-2 sm:col-span-1"}  px-2.5 py-1.5 gap-2 bg-[#FCFCFC] rounded-2xl font-semibold border border-gray-200 flex items-center    text-sm transition
               `}
                >
                  <span
                    className={`cursor-pointer w-5 h-5 rounded-sm shrink-0 ${
                      active ? "bg-purple-600" : "bg-gray-200"
                    }`}
                  />

                  <span className="truncate whitespace-nowrap overflow-hidden">
                    {item}
                  </span>
                </button>
              );
            })}
          </div>

          {errors.services && (
            <p className="text-red-500 text-sm mt-2">
              {errors.services.message}
            </p>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">
            در مورد درخواست خود برای ما بنویسید.
          </label>

          <textarea
            {...register("description")}
            className="w-full border bg-[#FCFCFC]  border-gray-200 rounded-lg p-3 min-h-42.75 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="در مورد درخواست خود بنویسید..."
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-96.5 bg-black text-white py-3 rounded-full transition cursor-pointer flex items-center justify-center gap-2
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"}
  `}
          >
            {loading ? "در حال ارسال..." : "ثبت درخواست"}
          </button>
        </div>
      </form>
    </section>
  );
};
