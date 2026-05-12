import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/shared-ui";

export const FAQ = ({
  data,
}: {
  data: { title: string; content: string }[];
}) => {
  return (
    <section className="p-5">
      <div className="max-w-7xl mx-auto bg-white py-12 sm:py-20 px-4 sm:px-10 rounded-md border border-gray-200 grid grid-cols-1 sm:grid-cols-10 gap-6 sm:gap-10">
        <div className="flex flex-col gap-4 sm:col-span-3 col-span-10 text-center sm:text-right">
          <h2 className="text-[32px] font-semibold"> FAQ</h2>
          <h2 className="text-2xl font-semibold">
            {" "}
            سوالات متداولی که از ما می‌پرسید
          </h2>
          <p>
            سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده
            اند:
          </p>
        </div>
        <div className="sm:col-span-7 col-span-10">
          <Accordion>
            {data.map((item, i) => (
              <AccordionItem key={i} index={i}>
                <AccordionTrigger index={i} title={item.title} />
                <AccordionContent index={i}>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
