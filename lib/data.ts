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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  label: string;
  items: FAQItem[];
}


export const categories: FAQCategory[] = [
  {
    label: "General",
    items: [
      {
        question: "What is Kablux?",
        answer:
          "Kablux is a Nigerian ride-hailing platform that allows riders and drivers to negotiate fares before every trip. The platform prioritizes transparency, affordability, and safety.",
      },
      {
        question: "Where does Kablux operate?",
        answer:
          "Kablux is launching in major Nigerian cities, beginning with Lagos, with plans to expand across the country as our driver network grows.",
      },
      {
        question: "How is Kablux different from other ride-hailing apps?",
        answer:
          "Unlike traditional ride-hailing platforms, Kablux allows riders and drivers to negotiate fares, creating fairer pricing while maintaining high safety standards.",
      },
    ],
  },

  {
    label: "For Riders",
    items: [
      {
        question: "How do I book a ride?",
        answer:
          "Open the Kablux app, enter your pickup and destination, receive offers from nearby drivers, negotiate if needed, and confirm your preferred ride.",
      },
      {
        question: "Can I negotiate the fare?",
        answer:
          "Yes. Kablux lets you negotiate with drivers before confirming your ride so both parties agree on a fair price.",
      },
      {
        question: "How do I share my trip?",
        answer:
          "During an active trip, tap the 'Share Trip' option to send your live trip details and location to trusted friends or family.",
      },
    ],
  },

  {
    label: "For Drivers",
    items: [
      {
        question: "How do I sign up as a driver?",
        answer:
          "Download the Kablux Driver app, complete your profile, upload the required documents, and wait for verification before accepting trips.",
      },
      {
        question: "When do I get paid?",
        answer:
          "Driver earnings are transferred according to the payout schedule shown in your driver dashboard. You can also monitor completed trips and earnings anytime.",
      },
      {
        question: "What commission does Kablux take?",
        answer:
          "Kablux charges a transparent commission on completed trips. The exact rate is clearly communicated before you start driving.",
      },
    ],
  },

  {
    label: "Corporate",
    items: [
      {
        question: "Does Kablux offer corporate accounts?",
        answer:
          "Yes. Businesses can create corporate accounts to manage employee transportation, receive centralized billing, and access ride reports.",
      },
      {
        question: "Can we book rides for guests or clients?",
        answer:
          "Absolutely. Corporate administrators can book rides for employees, guests, and clients directly from the corporate dashboard.",
      },
    ],
  },

  {
    label: "Safety",
    items: [
      {
        question: "Are Kablux drivers verified?",
        answer:
          "Yes. Every driver undergoes identity verification, document validation, and vehicle inspection before joining the platform.",
      },
      {
        question: "What is the SOS button?",
        answer:
          "The SOS feature allows riders and drivers to quickly contact emergency services or designated emergency contacts during a trip.",
      },
      {
        question: "Can I report unsafe behavior?",
        answer:
          "Yes. You can report safety concerns directly through the app. Our support team reviews every report promptly.",
      },
    ],
  },

  {
    label: "Payments",
    items: [
      {
        question: "How can I pay?",
        answer:
          "Kablux supports multiple payment options, including debit cards, bank transfers, wallets, and cash where available.",
      },
      {
        question: "Do you provide receipts?",
        answer:
          "Yes. Digital receipts are automatically sent after every completed trip and are available in your trip history.",
      },
      {
        question: "Can I save multiple payment methods?",
        answer:
          "Yes. You can securely add and manage multiple payment methods from your account settings.",
      },
    ],
  },
];


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
