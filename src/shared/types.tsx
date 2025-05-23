export enum SelectedPage {
    Home = "home",
    Services = "services",
    Pricing = "pricing",
    ContactUs = "contactus"
  }


  export interface ServiceType {
    imageUrl: string;
    title: string;
    description: string;
  }

  
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }
  

  export interface PricingType {
    imageUrl: string;
    title: string;
    type: SelectedItem;
  }

  export enum SelectedItem {
    iPad = "ipad",
    iPhone = "iphone",
    Macbooks = "macbook",
    Services = "services",
    iMac = "imac",
    Console = "console",
    None = "none"
  }


  export interface RepairItem {
    title: string;
    price: string;
  }
  
  export interface RepairListProps {
    title: string;
    items: RepairItem[];
  }

  export interface TeamMember {
    id: number;
    name: string;
    phone: string;
    image: string;
  }


  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Abrahamson",
      phone: "+27815153706",
      image: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/4381c349-27d8-44e7-ac57-bc804f8b9a1e.JPG?alt=media&token=fe4ae145-eab3-4be7-8854-66f5cd581570", // Update with the actual image path
    },
    {
      id: 2,
      name: "Listen",
      phone: "+27634443944",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHyG_6DaLMxeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1619253458093?e=1736380800&v=beta&t=p3LOrU4Cl-oj_YOxByNhbq3iX5X1OPL8DsablxbEFxo", // Update with the actual image path
    },
   
    {
      id: 3,
      name: "Andre",
      phone: "+27631192050",
      image: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/Passport%20photo.jpg?alt=media&token=d1ac5bb6-8820-4031-b9bd-d205c050a00a", // Update with the actual image path
    },
  ];  
  
  export const ipad: RepairListProps[] = [
    {
      title: "NOT CHARGING",
      items: [
        { title: "iPad Mini 4/5/Pro 9.7/10.5", price: "R999" },
        { title: "iPad Air 1/2/3", price: "R999" },
        { title: "iPad 5/6/7/8/9", price: "R999" },
        { title: "iPad Pro- 11/12.9", price: "R1,499" },
        { title: "iPad Air 4/5, iPad mini 6", price: "R999" },
      ],
    },
    {
      title: "MOTHERBOARD REPAIR PRICING",
      items: [
        { title: "iPadPro 10.5 Display/Power", price: "R1 799" },
        { title: "Glitchy, intermittent & NO power", price: "R1 799" },
      ],
    },
    {
      title: "NO POWER/ NOT BOOTING",
      items: [
        { title: "iPad Mini 4/5/6", price: "R1,499" },
        { title: "iPad Air 3/4/5", price: "R1,499" },
        { title: "iPad 5/6/7/8/9", price: "R1,499" },
        { title: "iPad Pro- all sizes", price: "R1,999" },
      ],
    },
    {
      title: "NO TOUCH",
      items: [
        { title: "iPad Air 2", price: "R999" },
        { title: "iPad Pro 12.9", price: "R1,999" },
        { title: "iPad Pro 12.9 touch/backlight issue", price: "R1,799" },
      ],
    },
    {
      title: "CONNECTORS",
      items: [
        { title: "Digi- iPad Mini 4/5", price: "R799" },
        { title: "Most other iPad connectors", price: "R799" },
        { title: "Complex pulled pads", price: "R999" },
      ],
    },
    {
      title: "NO TOUCH",
      items: [
        { title: "iPad Air 2", price: "R999" },
        { title: "iPad Pro 12.9", price: "R1,999" },
      ],
    },
  ];
  
  

  export const iphone: RepairListProps[] = [
    {
      title: "REAR REGLASSES",
      items: [
        { title: "iPhone 8 series", price: "R799.00" },
        { title: "iPhone X/Xr/XS/XS Max/11 series", price: "R999.00" },
        { title: "iPhone 12mini/13mini series", price: "R999.00" },
        { title: "iPhone 12/13 series", price: "R1,499.00" },
        { title: "iPhone 14 series", price: "R1,799.00" },
  { title: "iPhone 15 series", price: "R1,999.00" },
      ],
    },
    {
      title: "NO IMAGE/NO BACKLIGHT",
      items: [
        { title: "iPhone Xs/XsMax", price: "R999.00" },
        { title: "iPhone X/Xr", price: "R999.00" },
        { title: "iPhone 7/7+, 8/8+", price: "R799.00" },
        { title: "iPhone 6/6+", price: "R799.00" },
        { title: "iPhone 6s/6s+", price: "R799.00" },
        { title: "iPhone 5/5s/5c/SE", price: "R799.00" },
      ],
    },
    {
      title: "NO POWER/BOOTING",
      items: [
        { title: "iPhone 12/13 / 14 series", price: "R2,499.00" },
        { title: "iPhone 11 series", price: "R1,499.00" },
        { title: "iPhone Xs/XsMax", price: "R999.00" },
        { title: "iPhone X/Xr", price: "R999.00" },
        { title: "iPhone 5,6,7,8 and SE series", price: "R799.00" },
      ],
    },
    {
      title: "NOT CHARGING",
      items: [
        { title: "iPhone XS/XSMax", price: "R999.00" },
        { title: "iPhone X/Xr", price: "R999.00" },
        { title: "iPhone 5,6,7,8 and SE series", price: "R799.00" },
      ],
    },
    {
      title: "TECHNICIAN DAMAGE",
      items: [
        { title: "iPhone 11,12,13,14 Series", price: "R1,999.00" },
        { title: "iPhone XS/XSMax", price: "R999.00" },
        { title: "iPhone X/Xr", price: "R999.00" },
        { title: "iPhone 8/8+, 7/7+", price: "R799.00" },
        { title: "iPhone 6s/6s+", price: "R799.00" },
      ],
    },
    {
      title: "PARTS REPLACEMENT LABOUR ONLY",
      items: [
        { title: "iPhone 6-8 series", price: "R299.00" },
        { title: "iPhone X/Xr/XS/XS Max/11 series", price: "R299.00" },
        { title: "iPhone 12/13 series", price: "R399.00" },
        { title: "iPhone 14/15 series", price: "R499.00" },
      ],
    },
    {
      title: "NETWORK/ BASEBAND / NO IMEI",
      items: [
        { title: "iPhone 12/13 / 14 series", price: "R2,499.00" },
        { title: "iPhone 11 series", price: "R1,999.00" },
        { title: "iPhone Xs/XsMax", price: "R1,499.00" },
        { title: "iPhone X/Xr", price: "R1,499.00" },
        { title: "iPhone 5,6,7,8 and SE series", price: "R999.00" },
      ],
    },
    {
      title: "INTERPOSER / NAND",
      items: [
        { title: "iPhone 12 series", price: "R2,499.00" },
        { title: "iPhone 13 series", price: "R2,999.00" },
        { title: "iPhone 14 series", price: "R3,499.00" },
        { title: "iPhone 15 series", price: "R3,499.00" },
        { title: "iPhone 11 series", price: "R1,999.00" },
        { title: "iPhone Xs/XsMax", price: "R1,499.00" },
      ],
    },
  ];
  

  export const macbook: RepairListProps[] = [
    {
      title: "MACBOOK REPAIR",
      items: [
        { title: "Board level (lower end)", price: "R2,499.00" },
        { title: "Board level (High end)", price: "R2,999.00" },
        { title: "Board level M2 & Above", price: "R3,999.00" },
        { title: "Data Recovery", price: "R4,999 (+ storage cost)" },
      ],
    },
  ];


  export const services: RepairListProps[] = [
    {
      title: "DATA RECOVERY",
      items: [
        { title: "iPhone 14 series", price: "R4,999" },
        { title: "iPhone 11/12/13 series", price: "R3,999" },
        { title: "iPhone Xs/XsMax", price: "R2,999" },
        { title: "iPhone X/Xr", price: "R2,999" },
        { title: "iPhone 7/7+, 8/8+, SE 2020", price: "R1,999" },
        { title: "iPhone 6/6+, 6s/6s+", price: "R999" },
        { title: "Vintage Models 3/4/5/SE", price: "R3,999" },
      ],
    },
    {
      title: "ANDROID DATA RECOVERY",
      items: [
        { title: "Running OS 5 and under", price: "R4,999" },
        { title: "Running OS 6 and up", price: "R5,999" },
      ],
    },
  ];
  

  export const windows: RepairListProps[] = [
    {
      title: "WINDOWS MACHINE BOARD REPAIR",
      items: [
        { title: "Windows Machine No Power", price: "R1,199.00" },
        { title: "Windows Machine Not Charging", price: "R1,199.00" },
      ],
    },
  ];

  export const consoles: RepairListProps[] = [
    {
      title: "GAMING SYSTEMS",
      items: [
        { title: "PS5 / Xbox Series X HDMI", price: "R2,499" },
        { title: "PS4 / Xbox One, One X, Series S HDMI", price: "R1,999" },
        { title: "Steam Deck Charge Port", price: "R1,499" },
        { title: "Nintendo Switch Charge Port", price: "R1,299" },
        { title: "Nintendo Switch No Power", price: "R1,499" },
      ],
    },
  ];
  