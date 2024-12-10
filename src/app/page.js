import Image from "next/image";
import styles from "./page.module.css";

import HeroTemplate from '@/components/main/HeroTemplate';
import FeaturesTemplate from "@/components/main/FeaturesTemplate";

export default function Home() {
  return (
    <>
      <HeroTemplate 
        imageURL={'/hero-image.jpg'}
        headerText={'Laundry Service done right'}
        subtitleText={"Sudz Laundry House is So Cal's Premiere 5-Star Laundry Services"}
        coaURL={'/'}
        coaButtonText={'Special Offer'}
        coaSubtitleText={'Limited Time Offer for New Customers!'}
      />
      <FeaturesTemplate />
    </>
  );
}
