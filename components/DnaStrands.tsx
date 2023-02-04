import { FC, useState, useRef, useEffect, SyntheticEvent } from "react";
import Image from "next/image";

import { getScrollPercentage } from "../utils/helpers";

import BookingTool from "public/svg/booking-tool.svg";
import CarSharing from "public/svg/carsharing.svg";
import CrmTool from "public/svg/crm-tool.svg";
import FoodDelivery from "public/svg/food-delivery.svg";
import PeopleOs from "public/svg/people-os.svg";
import SocialPlatform from "public/svg/social-platform.svg";
import TeleHealth from "public/svg/telehealth.svg";

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
  SvgEl: FC & { ref?: HTMLElement };
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
  
  /**
   * Handle opacity of strand groups
    */
  const handleOpacity = (e: any) => {
    const $el = e.target

    /* If it's an SVG rect, get its color  */
    if ($el && $el.nodeName && $el.nodeName === "rect") {
      let elFill = $el.getAttribute("fill");
      
      console.log(elFill);
      strandsRef?.current?.querySelectorAll("svg rect").forEach(
        el => {
          if (el.getAttribute("fill") !== elFill) {
            el.setAttribute("opacity", "0.1");
          } else {
            el.setAttribute("opacity", "1");
          }
        }
      )
    } else {
      strandsRef?.current?.querySelectorAll("svg rect").forEach(
        el => {
          el.setAttribute("opacity", "1");
        }
      )
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseover", handleOpacity);

    return () => {
      strandsRef?.current?.removeEventListener("mouseover", handleOpacity);
      window.removeEventListener("scroll", handleScroll);
    }
    
  }, []);

  return (
    <>
      <section className="relative container group/section">
        <div ref={strandsRef} className="flex justify-between items-end">
          <Strand offset='3'
          functionalArea="CRM Tool"
          SvgEl={CrmTool}
          dnaInfo={{
            top: { text: "User Interface", color: "orange" }
          }} />
          <Strand offset='-11' functionalArea="People OS" SvgEl={PeopleOs} />
          <Strand offset='24'
          functionalArea="Booking Tool"
          SvgEl={BookingTool}
          dnaInfo={{
            bottom: { text: "Infrastructure", color: "green" }
          }} />
          <Strand offset='7' functionalArea="Telehealth" SvgEl={TeleHealth} />
          <Strand
            offset='-10'
            functionalArea="Food Delivery"
            SvgEl={FoodDelivery}
            dnaInfo={{
              top: { text: "Basic Features", color: "blue"},
              bottom: { text: "3rd party stuff", color: "violet" }
            }}
          />
          <Strand offset='29' functionalArea="Social Platform" SvgEl={SocialPlatform} />
          <Strand offset='-13' functionalArea="Carsharing" SvgEl={CarSharing} />
        </div>
      </section>
      {!dnaInteraction && (
        <div className="z-20 fixed bottom-0 left-0 w-full h-full flex justify-center items-center" />
      )}
    </>
  );
};

const Strand: FC<StrandProps> = (props) => {
  const { functionalArea, SvgEl, offset, dnaInfo } = props;

  return (
    <div className={`relative flex flex-col items-start el-strand`} data-offset={offset}>
      <div className="z-10 flex flex-col items-start" style={{ transform: `translateY(${offset}%)` }}>
        {dnaInfo && dnaInfo.top && (
          <StrandDescription
            classes="-top-12"
            descriptionText={dnaInfo.top.text}
            color={dnaInfo.top.color}
          />
        )}
        <SvgEl />
        {dnaInfo && dnaInfo.bottom && (
          <StrandDescription
            classes="-bottom-12"
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