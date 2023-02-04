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

interface DnaInfoProps {
  top?: { text: string, color: string };
  bottom?: { text: string, color: string };
}

interface StrandDescriptionProps {
  descriptionText: string;
  color: string;
  classes?: string;
}

interface StrandProps {
  functionalArea: string;
  src: string;
  offset?: string;
  dnaInfo?: DnaInfoProps
}

export const DnaStrands = () => {
  const scrollPercentage = useRef<number>(0);
  const [dnaInteraction, setDnaInteraction] = useState<boolean>(false);
  const strandsRef = useRef<HTMLDivElement>(null);

  /**
   * Handle scroll events on the page and set scroll percentage
   */
  const handleScroll = () => {
    scrollPercentage.current = getScrollPercentage();

    /* Iterate through each strand and calculate offsets according to scroll position */
    if (strandsRef.current?.children) {
      Array.from(strandsRef.current.children).forEach((strand: any) => {
        /**
         * Set each strand's image translateY property to a normalized value:
         * the closer to percentageScrolledRef equaling 100, the more the offset is applied
         *  */ 
        strand.children[0].style.transform = `
          translateY(${(100 - scrollPercentage.current) * strand.dataset.offset / 100}%)
        `
      })
    }

    /* Enable DNA interaction when scrolling animation is done */
    scrollPercentage.current > 98 ? setDnaInteraction(true) : setDnaInteraction(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative container group/section">
        <div ref={strandsRef} className="flex justify-between items-end">
          <Strand offset='3'
          functionalArea="CRM Tool"
          src={crmTool}
          dnaInfo={{
            top: { text: "User Interface", color: "orange" }
          }} />
          <Strand offset='-11' functionalArea="People OS" src={peopleOs} />
          <Strand offset='24'
          functionalArea="Booking Tool"
          src={bookingTool}
          dnaInfo={{
            bottom: { text: "Infrastructure", color: "green" }
          }} />
          <Strand offset='7' functionalArea="Telehealth" src={teleHealth} />
          <Strand
            offset='-10'
            functionalArea="Food Delivery"
            src={foodDelivery}
            dnaInfo={{
              top: { text: "Basic Features", color: "blue"},
              bottom: { text: "3rd party stuff", color: "purple" }
            }}
          />
          <Strand offset='29' functionalArea="Social Platform" src={socialPlatform} />
          <Strand offset='-13' functionalArea="Carsharing" src={carSharing} />
        </div>
      </section>
      {!dnaInteraction && (
        <div className="z-20 fixed bottom-0 left-0 w-full h-full flex justify-center items-center" />
      )}
    </>
  );
};

const Strand: FC<StrandProps> = (props) => {
  const { functionalArea, src, offset, dnaInfo } = props;

  return (
    <div className={`relative flex flex-col items-start group/strand`} data-offset={offset}>
      <div className="z-10 flex flex-col items-start" style={{ transform: `translateY(${offset}%)` }}>
        {dnaInfo && dnaInfo.top && (
          <StrandDescription
            classes="-top-12 group-hover/strand:opacity-100"
            descriptionText={dnaInfo.top.text}
            color={dnaInfo.top.color}
          />
        )}
        <Image src={src} alt={functionalArea} />
        {dnaInfo && dnaInfo.bottom && (
          <StrandDescription
            classes="-bottom-12 group-hover/strand:opacity-100"
            descriptionText={dnaInfo.bottom.text}
            color={dnaInfo.bottom.color}
          />
        )}
      </div>
      <span
        className="z-0 absolute mt-6 -bottom-12 font-roboto text-xs text-silver-300 tracking-tight
          group-hover/section:opacity-0 transition-opacity"
      >
        {functionalArea}
      </span>
    </div>
  );
};

const StrandDescription: FC<StrandDescriptionProps> = (props) => {
  const { classes, descriptionText, color } = props;

  return (
    <span className={`absolute font-roboto text-xs tracking-tight opacity-0 transition-opacity pointer-events-none text-${color} ${classes}`}>
      {descriptionText}
    </span>
  )
}