export type Vehicle = {
  id: string;
  stock: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  downPayment?: number;
  monthlyPayment?: number;
  mileage?: number;
  engine?: string;
  transmission?: string;
  drivetrain: string;
  bodyStyle?: string;
  fuel?: string;
  exteriorColor?: string;
  color?: string;
  interiorColor?: string;
  titleStatus?: string;
  owners?: number;
  accidentHistory?: string;
  features?: string[];
  financingAvailable?: boolean;
  shippingAvailable?: boolean;
  carfaxAvailable?: boolean;
  images: {
    exterior: string[];
    interior: string[];
  };
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    id: "7",
    stock: "DA-1102",
    year: 1996,
    make: "Mazda",
    model: "B3000",
    trim: "SE Cab Plus",
    price: 1500,
    downPayment: 400,
    mileage: 46600,
    engine: "3.0L V6",
    transmission: "Automatic (4-Speed)",
    drivetrain: "RWD",
    fuel: "Gasoline",
    exteriorColor: "Pumice Metallic",
    color: "Pumice Metallic",
    interiorColor: "Beige",
    images: {
      exterior: ["/madza/ext.jpg", "/madza/ext2.jpg"],
      interior: ["/madza/int.jpg"],
    },
  },
  {
    id: "8",
    stock: "DA-1103",
    year: 1991,
    make: "Toyota",
    model: "Pickup",
    trim: "Deluxe XtraCab 4x4",
    price: 2000,
    downPayment: 350,
    mileage: 137100,
    engine: "3.0L V6",
    transmission: "Automatic (4-Speed)",
    drivetrain: "4WD",
    bodyStyle: "Truck",
    exteriorColor: "Dark Gray Metallic",
    color: "Dark Gray Metallic",
    interiorColor: "Gray",
    images: {
      exterior: ["/toyotapic/ext.jpg", "/toyotapic/ext2.jpg"],
      interior: ["/toyotapic/int.jpg"],
    },
  },
  {
    id: "9",
    stock: "DA-1104",
    year: 2006,
    make: "Chevrolet",
    model: "Silverado 1500",
    trim: "LT",
    price: 2800,
    downPayment: 340,
    mileage: 162000,
    engine: "4.8L V8",
    drivetrain: "4WD",
    bodyStyle: "Truck (Short Bed)",
    titleStatus: "Clean, in hand",
    carfaxAvailable: true,
    features: [
      "Cold AC",
      "Power Windows & Locks",
      "Upgraded Shocks",
      "Upgraded Speakers",
      "Touch Screen Radio",
      "Android Auto / Apple CarPlay",
    ],
    color: "Silver",
    images: {
      exterior: ["/chevy/ext.jpg", "/chevy/ext2.jpg"],
      interior: ["/chevy/int.jpg"],
    },
  },
  {
    id: "10",
    stock: "DA-1105",
    year: 2014,
    make: "Infiniti",
    model: "Q50",
    trim: "Premium",
    price: 3000,
    downPayment: 300,
    monthlyPayment: 400,
    mileage: 124000,
    engine: "6-Cylinder",
    drivetrain: "FWD",
    titleStatus: "Clean",
    financingAvailable: true,
    features: [
      "Navigation System",
      "Backup Camera",
      "Heated Seats",
      "Leather Seats",
      "Power Windows",
      "Fully Loaded",
    ],
    color: "Black",
    images: {
      exterior: ["/infinity/ext.jpg", "/infinity/ext2.jpg"],
      interior: ["/infinity/int.jpg"],
    },
  },
  {
    id: "11",
    stock: "DA-1106",
    year: 2012,
    make: "Toyota",
    model: "Camry",
    trim: "",
    price: 2500,
    downPayment: 500,
    engine: "4-Cylinder",
    drivetrain: "FWD",
    titleStatus: "Clean",
    owners: 1,
    accidentHistory: "None reported",
    financingAvailable: true,
    shippingAvailable: true,
    features: [
      "Push Start",
      "Leather Seats",
      "AC Blows Cold",
      "Fully Loaded",
      "Clean Inside & Out",
      "Bluetooth",
    ],
    color: "White",
    images: {
      exterior: ["/camry/ext.jpg", "/camry/ext2.jpg"],
      interior: ["/camry/int.jpg"],
    },
  },
  {
    id: "12",
    stock: "DA-1107",
    year: 2010,
    make: "Toyota",
    model: "Corolla",
    trim: "",
    price: 2000,
    downPayment: 400,
    mileage: 140000,
    engine: "4-Cylinder",
    drivetrain: "FWD",
    titleStatus: "Clean, emissions pass",
    features: [
      "Runs Great",
      "No Oil Leaks",
      "Everything Works Great",
      "AC Blows Cold",
      "Good Tires",
    ],
    color: "Gray",
    images: {
      exterior: ["/corolla/ext.jpg", "/corolla/ext2.jpg"],
      interior: ["/corolla/int.jpg"],
    },
  },
  {
    id: "13",
    stock: "DA-1108",
    year: 2011,
    make: "BMW",
    model: "328i xDrive",
    trim: "",
    price: 2000,
    downPayment: 350,
    mileage: 123000,
    engine: "4-Cylinder",
    drivetrain: "AWD",
    titleStatus: "Clean",
    owners: 1,
    accidentHistory: "None reported",
    features: [
      "Push Start",
      "Leather Seats",
      "AC Blows Cold",
      "Fully Loaded",
      "Clean Inside & Out",
      "Bluetooth",
    ],
    color: "Blue",
    images: {
      exterior: ["/BMW/ext.jpg", "/BMW/ext2.jpg"],
      interior: ["/BMW/int.jpg"],
    },
  },
];
export type Service = {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  duration: string;
  category: "Maintenance" | "Repair" | "Diagnostics";
};

export const services: Service[] = [
  {
    id: "s1",
    name: "Oil & Filter Change",
    description:
      "Full synthetic oil, new filter, and a 21-point courtesy inspection.",
    priceFrom: 49,
    duration: "30 min",
    category: "Maintenance",
  },
  {
    id: "s2",
    name: "Brake Pad & Rotor Service",
    description:
      "Front or rear pads, rotors resurfaced or replaced, fluid check.",
    priceFrom: 189,
    duration: "1.5 hr",
    category: "Repair",
  },
  {
    id: "s3",
    name: "Check Engine Diagnostics",
    description:
      "Full OBD-II scan with a written explanation of what's actually wrong.",
    priceFrom: 89,
    duration: "45 min",
    category: "Diagnostics",
  },
  {
    id: "s4",
    name: "Battery & Alternator Test",
    description: "Load test, charging system check, and replacement if needed.",
    priceFrom: 39,
    duration: "20 min",
    category: "Diagnostics",
  },
  {
    id: "s5",
    name: "Transmission Service",
    description:
      "Fluid and filter exchange to keep shifts smooth and protect the gearbox.",
    priceFrom: 159,
    duration: "1 hr",
    category: "Maintenance",
  },
  {
    id: "s6",
    name: "AC Repair & Recharge",
    description:
      "Leak check, recharge, and component repair to get the cold air back.",
    priceFrom: 119,
    duration: "1 hr",
    category: "Repair",
  },
  {
    id: "s7",
    name: "Tire Rotation & Alignment",
    description:
      "Even out tread wear and keep the car tracking straight down the road.",
    priceFrom: 79,
    duration: "45 min",
    category: "Maintenance",
  },
  {
    id: "s8",
    name: "Pre-Purchase Inspection",
    description:
      "Buying a car elsewhere? We'll check it over before you commit.",
    priceFrom: 69,
    duration: "45 min",
    category: "Diagnostics",
  },
];

export const stats = [
  { label: "Years in Business", value: "14" },
  { label: "Cars Sold", value: "2,800+" },
  { label: "Avg. Bay Turnaround", value: "Same Day" },
  { label: "Customer Rating", value: "4.8/5" },
];
