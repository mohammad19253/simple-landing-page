import { ObstaclesSlider } from "@/components/marketing-and-advertising/ObstaclesSlider";
import { ConsultationForm } from "@/components/marketing-and-advertising/ConsultationForm";
import { FAQ } from "@/components/marketing-and-advertising/FAQ";
import { HeroSection } from "@/components/marketing-and-advertising/HeroSection";

import { FAQ_LIST, SERVICES_LIST, SLIDER_ITEMS } from "@/mock-data";

export default function MarketingPage() {
  return (
    <section className="flex flex-col items-center gap-12 justify-center">
      <HeroSection />
      <ObstaclesSlider items={SLIDER_ITEMS} />
      <ConsultationForm servicesList={SERVICES_LIST} />
      <FAQ data={FAQ_LIST} />
    </section>
  );
}
