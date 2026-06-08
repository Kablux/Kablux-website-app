import {
  FaLeaf,
  FaMoneyBillWave,
  FaCarSide,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaSearch,
  FaCalendarCheck,
} from "react-icons/fa";


export const carCategories = [
  "All",
  "Luxury",
  "Executive",
  "Business",
  "Wedding",
  "VIP",
  "Classic",
];

export interface Car {
  id: string;
  slug: string;
  name: string;
  type: string;
  price: string;
  currency: string;
  image: string;
  transmission: string;
  ac: boolean;
  category: string;
}

export const availableCars: Car[] = [
  {
    id: "1",
    slug: "mercedes-s-class",
    name: "Mercedes S-Class",
    type: "Luxury Sedan",
    price: "25",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Luxury",
  },
  {
    id: "2",
    slug: "tesla-model-s",
    name: "Tesla Model S",
    type: "Executive Sedan",
    price: "50",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Executive",
  },
  {
    id: "3",
    slug: "mercedes-amg",
    name: "Mercedes AMG",
    type: "Business Sedan",
    price: "45",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Business",
  },
  {
    id: "4",
    slug: "audi-q8",
    name: "Audi Q8",
    type: "Luxury Wedding",
    price: "40",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Wedding",
  },
  {
    id: "5",
    slug: "mclaren-720s",
    name: "McLaren 720S",
    type: "Super Sport",
    price: "35",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Sport",
  },
  {
    id: "6",
    slug: "mini-cooper-classic",
    name: "Mini Cooper",
    type: "Classic Hatchback",
    price: "50",
    currency: "N",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    transmission: "Automatic",
    ac: true,
    category: "Classic",
  },
];

export const safetyFeatures = [
  {
    number: "01",
    title: "Verified Drivers Only",
    description:
      "Every Kablux driver passes strict background screening processes. No shortcuts. No exceptions.",
  },
  {
    number: "02",
    title: "Real Time Tracking",
    description:
      "From pickup to drop-off, we monitor every ride in real time. Share your trip with loved ones.",
  },
  {
    number: "03",
    title: "Emergency Features",
    description:
      "Your safety is non-negotiable. Help is always one tap away with Kablux.",
  },
];

export const fleetSteps = [
  {
    icon: FaSearch,
    title: "Kablux Fleet Browse and Select",
    description:
      "Choose from our wide range of premium vehicles and select pickup and return locations that suit you best.",
  },
  {
    icon: FaCalendarCheck,
    title: "Book and Confirm",
    description:
      "Book your desired vehicle in a few clicks and receive instant confirmation.",
  },
  {
    icon: FaCarSide,
    title: "Enjoy Your Ride",
    description:
      "Enjoy a premium transportation experience backed by quality service and comfort.",
  },
];

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
