import Image from "next/image";

import bookingTool from "public/svg/booking-tool.svg";
import carSharing from "public/svg/carsharing.svg";
import crmTool from "public/svg/crm-tool.svg";
import foodDelivery from "public/svg/food-delivery.svg";
import peopleOs from "public/svg/people-os.svg";
import socialPlatform from "public/svg/social-platform.svg";
import teleHealth from "public/svg/telehealth.svg";

export const DnaStrands = () => {
  return (
    <section className="container mt-36">
      <div className="flex justify-between items-end">
        <Image src={bookingTool} alt="Booking Tool" />
        <Image src={carSharing} alt="Car Sharing" />
        <Image src={crmTool} alt="CRM Tool" />
        <Image src={foodDelivery} alt="Food Delivery" />
        <Image src={peopleOs} alt="People OS" />
        <Image src={socialPlatform} alt="Social Platform" />
        <Image src={teleHealth} alt="Telehealth" />
      </div>
    </section>
  );
};
