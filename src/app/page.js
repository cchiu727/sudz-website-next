import HeroTemplate from '@/components/main/HeroTemplate';
import FeaturesTemplate from "@/components/main/FeaturesTemplate";
import TestimonialsTemplate from "@/components/main/TestimonialsTemplate";

export default function Home() {
  return (
    <>
      <HeroTemplate 
        imageURL={'/hero-image.jpg'}
        headerText={'Laundry Service done right'}
        subtitleText={"Sudz Laundry House is So Cal's Premiere 5-Star Laundry Services"}
        coaURL={'/special-offer'}
        coaButtonText={'Special Offer'}
        coaSubtitleText={'Limited Time Offer for New Fluff & Fold Customers!'}
      />
      <FeaturesTemplate />
      <TestimonialsTemplate />
    </>
  );
}
