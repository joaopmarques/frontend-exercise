import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";

import { getScrollPercentage } from "../utils/helpers";

import bookingTool from "public/svg/booking-tool.svg";
import carSharing from "public/svg/carsharing.svg";
import crmTool from "public/svg/crm-tool.svg";
import foodDelivery from "public/svg/food-delivery.svg";
import peopleOs from "public/svg/people-os.svg";
import socialPlatform from "public/svg/social-platform.svg";
import teleHealth from "public/svg/telehealth.svg";

interface StrandProps {
  functionalArea: string;
  src: string;
  offset?: string;
}


export const DnaStrands = () => {
  const scrollPercentage = useRef<number>(0);
  const [dnaInteraction, setDnaInteraction] = useState<boolean>(false);
  const strandsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    scrollPercentage.current = getScrollPercentage();

    /* Iterate through each strand and calculate offsets according to scroll position */
    if (strandsRef.current?.children) {
      Array.from(strandsRef.current.children).forEach((strand: any) => {
        // Set each strand translateY property to a normalized value - the closer to percentageScrolledRef equaling 100, the more the offset is applied
        strand.style.transform = `translateY(${(100 - scrollPercentage.current) * strand.dataset.offset / 100}%)`
      })
    }

    /* Enable DNA interaction when scrolling animation is done */
    scrollPercentage.current > 98 ? setDnaInteraction(true) : setDnaInteraction(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);

  return (
    <>
      <section className="relative container">
        <div ref={strandsRef} className="flex justify-between items-end">
          <Strand offset='3' functionalArea="CRM Tool" src={crmTool} />
          <Strand offset='-11' functionalArea="People OS" src={peopleOs} />
          <Strand offset='24' functionalArea="Booking Tool" src={bookingTool} />
          <Strand offset='7' functionalArea="Telehealth" src={teleHealth} />
          <Strand offset='-10' functionalArea="Food Delivery" src={foodDelivery} />
          <Strand offset='29' functionalArea="Social Platform" src={socialPlatform} />
          <Strand offset='-13' functionalArea="Carsharing" src={carSharing} />
        </div>
      </section>
      {!dnaInteraction && (
        <div className="fixed bottom-0 left-0 w-full h-full flex justify-center items-center" />
      )}
    </>
  );
};

const Strand: FC<StrandProps> = (props) => {
  const { functionalArea, src, offset } = props;

  return (
    <div className={`relative flex flex-col items-start`} data-offset={offset} style={{ transform: `translateY(${offset}%)` }}>
      <Image src={src} alt={functionalArea} />
      <span className="absolute mt-6 -bottom-12 font-roboto text-xs text-silver-300 tracking-tight">{functionalArea}</span>
    </div>
  );
};