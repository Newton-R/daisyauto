export type Vehicle = {
  id: string;
  stock: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  mileage: number;
  transmission: string;
  drivetrain: string;
  fuel: string;
  color: string;
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    id: "1",
    stock: "DA-1042",
    year: 2019,
    make: "Honda",
    model: "Accord",
    trim: "EX-L",
    price: 18995,
    mileage: 41200,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel: "Gasoline",
    color: "Modern Steel",
    featured: true,
  },
  {
    id: "2",
    stock: "DA-1057",
    year: 2020,
    make: "Toyota",
    model: "RAV4",
    trim: "XLE",
    price: 23450,
    mileage: 33800,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuel: "Gasoline",
    color: "Blueprint",
    featured: true,
  },
  {
    id: "3",
    stock: "DA-1063",
    year: 2018,
    make: "Ford",
    model: "F-150",
    trim: "XLT SuperCrew",
    price: 26900,
    mileage: 58100,
    transmission: "Automatic",
    drivetrain: "4WD",
    fuel: "Gasoline",
    color: "Oxford White",
    featured: true,
  },
  {
    id: "4",
    stock: "DA-1071",
    year: 2021,
    make: "Chevrolet",
    model: "Malibu",
    trim: "LT",
    price: 17200,
    mileage: 27950,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel: "Gasoline",
    color: "Mosaic Black",
  },
  {
    id: "5",
    stock: "DA-1084",
    year: 2017,
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    price: 12800,
    mileage: 66300,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel: "Gasoline",
    color: "Gun Metallic",
  },
  {
    id: "6",
    stock: "DA-1093",
    year: 2020,
    make: "Jeep",
    model: "Grand Cherokee",
    trim: "Laredo",
    price: 24700,
    mileage: 39600,
    transmission: "Automatic",
    drivetrain: "4WD",
    fuel: "Gasoline",
    color: "Diamond Black",
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
    description: "Full synthetic oil, new filter, and a 21-point courtesy inspection.",
    priceFrom: 49,
    duration: "30 min",
    category: "Maintenance",
  },
  {
    id: "s2",
    name: "Brake Pad & Rotor Service",
    description: "Front or rear pads, rotors resurfaced or replaced, fluid check.",
    priceFrom: 189,
    duration: "1.5 hr",
    category: "Repair",
  },
  {
    id: "s3",
    name: "Check Engine Diagnostics",
    description: "Full OBD-II scan with a written explanation of what's actually wrong.",
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
    description: "Fluid and filter exchange to keep shifts smooth and protect the gearbox.",
    priceFrom: 159,
    duration: "1 hr",
    category: "Maintenance",
  },
  {
    id: "s6",
    name: "AC Repair & Recharge",
    description: "Leak check, recharge, and component repair to get the cold air back.",
    priceFrom: 119,
    duration: "1 hr",
    category: "Repair",
  },
  {
    id: "s7",
    name: "Tire Rotation & Alignment",
    description: "Even out tread wear and keep the car tracking straight down the road.",
    priceFrom: 79,
    duration: "45 min",
    category: "Maintenance",
  },
  {
    id: "s8",
    name: "Pre-Purchase Inspection",
    description: "Buying a car elsewhere? We'll check it over before you commit.",
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
