import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, "نام الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
  phone: z.string().min(10, "شماره تماس معتبر نیست"),
  services: z.array(z.string()).min(1, "حداقل یک سرویس انتخاب کنید"),
  description: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

export type sliderItems = {
  title: string;
  icon: string;
  description: string;
};
