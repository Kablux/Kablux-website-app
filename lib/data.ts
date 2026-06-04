import {
  FaLeaf,
  FaMoneyBillWave,
  FaCarSide,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

export const services = [
  {
    title: "Standard",
    description:
      "Your quick ride app for everyday journeys, get matched with your driver in no time.",
    buttonText: "Book a Ride",
    image: "/standard.gif",
    href: "/rides",
  },
  {
    title: "Fleet Riders",
    description:
      "Doorstep delivery made electric and easy to deliver your items across different locations.",
    buttonText: "Become a Fleet Owner",
    image: "/fleet.gif",
    href: "/fleet",
  },
  {
    title: "Corporate Rides",
    description:
      "Efficient, electric haulage for your business and personal needs.",
    buttonText: "Register a Corporate Account",
    image: "/corporate.png",
    href: "/corporate",
  },
];


export const luxuryRideData = [
  {
    title: "Ride with Kablux",
    image: "/two-mobile-mockup.png",
    imagePosition: "left",
    iconColor: "#0d6d31",
    description:
      "Book clean, quiet electric rides in minutes. With upfront pricing, professional drivers, and zero emissions, Kablux is the smarter way to get around your city without compromising on comfort or cost.",
    features: [
      {
        icon: FaLeaf,
        text: "Our vehicles only zero emissions, zero noise.",
      },
      {
        icon: FaMoneyBillWave,
        text: "Affordable rates with upfront pricing.",
      },
      {
        icon: FaCarSide,
        text: "Clean, reliable rides in just a few taps.",
      },
    ],
  },
  {
    title: "Drive with Kablux",
    image: "/one-mobile-mockup.png",
    imagePosition: "right",
    iconColor: "#ffbd11",
    description:
      "Earn more behind the wheel without the fuel costs. Kablux gives you the freedom to drive on your terms, with instant payouts, lower maintenance, and a support team that actually supports you.",
    features: [
      {
        icon: FaShieldAlt,
        text: "Drive Safe, earn more lower fuel costs.",
      },
      {
        icon: FaClock,
        text: "Flexible hours and instant payouts.",
      },
      {
        icon: FaStar,
        text: "Be part of a platform that puts you first.",
      },
    ],
  },
];