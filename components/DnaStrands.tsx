import { FC, useRef, useEffect } from "react";
import Image from "next/image";

import { getScrollPercentage } from "../utils/helpers";

import bookingTool from "public/svg/booking-tool.svg";
import carSharing from "public/svg/carsharing.svg";
import crmTool from "public/svg/crm-tool.svg";
import foodDelivery from "public/svg/food-delivery.svg";
import peopleOs from "public/svg/people-os.svg";
import socialPlatform from "public/svg/social-platform.svg";
import teleHealth from "public/svg/telehealth.svg";

export const DnaStrands = () => {
  const strandsRef = useRef<HTMLDivElement>(null);
  let strands = strandsRef.current?.children;

  const handleScroll = () => {
    
    if (strands) {
      Array.from(strands).forEach((strand, index) => {
        // Set each strand translateY property to a normalized value - the closer to getScrollPercentage equaling 100, the more the offset is applied
        strand.style.transform = `translateY(${(100 - getScrollPercentage()) * strand.dataset.offset / 100}%)`
      })
    }

  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);

  return (
    <section className="relative container">
      <div ref={strandsRef} className="flex justify-between items-end">
        <Image data-offset='3' className="crmTool" src={crmTool} alt="CRM Tool" />
        <Image data-offset='-11' className="peopleOs" src={peopleOs} alt="People OS" />
        <Image data-offset='24' className="bookingTool" src={bookingTool} alt="Booking Tool" />
        <Image data-offset='7' className="teleHealth" src={teleHealth} alt="Telehealth" />
        <Image data-offset='-10' className="foodDelivery" src={foodDelivery} alt="Food Delivery" />
        <Image data-offset='29' className="socialPlatform" src={socialPlatform} alt="Social Platform" />
        <Image data-offset='-13' className="carSharing" src={carSharing} alt="Car Sharing" />
      </div>
    </section>
  );
};
