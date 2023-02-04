import BookingTool from "public/svg/booking-tool.svg";
import CarSharing from "public/svg/carsharing.svg";
import CrmTool from "public/svg/crm-tool.svg";
import FoodDelivery from "public/svg/food-delivery.svg";
import PeopleOs from "public/svg/people-os.svg";
import SocialPlatform from "public/svg/social-platform.svg";
import TeleHealth from "public/svg/telehealth.svg";

/**
 * Emulate data querying from a CMS (usually via GraphQL).
 * In this case, it looks like some Storybook mock data.
 */
export const mockData = {
  hero: {
    title: 'All apps in the world share the same DNA',
    description: 'Think about infrastructure, notifications, social auth. There’s over 70% overlap in functionality.',
  },
  dnaStrands: {
    data: [
      {
        offset: "3",
        functionalArea: "CRM Tool",
        SvgEl: CrmTool,
        dnaInfo: {
          top: { text: "User Interface", color: "orange" }
        },
      },
      {
        offset: "-11",
        functionalArea: "People OS",
        SvgEl: PeopleOs,
      },
      {
        offset: "24",
        functionalArea: "Booking Tool",
        SvgEl: BookingTool,
        dnaInfo: {
          bottom: { text: "Infrastructure", color: "green" },
        },
      },
      {
        offset: "7",
        functionalArea: "Telehealth",
        SvgEl: TeleHealth,
      },
      {
        offset: "-10",
        functionalArea: "Food Delivery",
        SvgEl: FoodDelivery,
        dnaInfo: {
          top: { text: "Basic Features", color: "blue" },
          bottom: { text: "3rd party stuff", color: "violet" },
        },
      },
      {
        offset: "29",
        functionalArea: "Social Platform",
        SvgEl: SocialPlatform,
      },
      {
        offset: "-13",
        functionalArea: "Carsharing",
        SvgEl: CarSharing,
      },
    ]
  },
  dualColumn: {
    title: 'Don’t reinvent the wheel every time you build a new app.',
    description: 'Instead, focus on what makes your app unique. We did the heavy lifting for you already. Just plug into our pre-made feature-suite and kickstart your project.',
  },
}