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
  src: string;
  alt: string;
  className?: string;
  offset?: string;
}

export const Strand: FC<StrandProps> = ({ src, alt, className, offset }) => {
  return (
    <div className={`relative ${className}`} data-offset={offset} style={{ transform: `translateY(${offset}%)` }}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export const DnaStrands = () => {
  const [dnaInteraction, setDnaInteraction] = useState<boolean>(false);
  const scrollPercentage = useRef<number>(0);
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
    scrollPercentage.current > 99 ? setDnaInteraction(true) : setDnaInteraction(false);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);

  return (
    <section className="relative container">
      <div ref={strandsRef} className="flex justify-between items-end">
        <Strand offset='3' className="crmTool" src={crmTool} alt="CRM Tool" />
        <Strand offset='-11' className="peopleOs" src={peopleOs} alt="People OS" />
        <Strand offset='24' className="bookingTool" src={bookingTool} alt="Booking Tool" />
        <Strand offset='7' className="teleHealth" src={teleHealth} alt="Telehealth" />
        <Strand offset='-10' className="foodDelivery" src={foodDelivery} alt="Food Delivery" />
        <Strand offset='29' className="socialPlatform" src={socialPlatform} alt="Social Platform" />
        <Strand offset='-13' className="carSharing" src={carSharing} alt="Car Sharing" />
      </div>
      {dnaInteraction && (
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          dna interaction here
        </div>
      )}
    </section>
  );
};
