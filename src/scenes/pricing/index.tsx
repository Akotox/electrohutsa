import { PricingType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { motion } from "framer-motion";
import PricingComponent from "./PriceComponent";
import iPhone from "@/assets/i16.webp";
import iPad from "@/assets/ipad.webp";
import Macbooks from "@/assets/macbooks.webp";
import iMac from "@/assets/imac.webp";
import Services from "@/assets/services.webp";
import Console from "@/assets/console.webp";
import { SelectedItem } from "../../shared/types";
import {  RepairListProps } from "../../shared/types";
import { useState } from "react";
import PriceList from "./PricesList";
import useMediaQuery from "../../hooks/useMediaQuery";

const pricing: Array<PricingType> = [
  {
    imageUrl: iPhone,
    title: "iPhones",
    type: SelectedItem.iPhone

  },
  {
    
    title: "iPads",
    imageUrl: iPad,
    type: SelectedItem.iPad
    
  },
  {
    title: "MacBooks",
    imageUrl: Macbooks,
    type: SelectedItem.Macbooks
  },
   {
    title: "Services",
    imageUrl: Services,
    type: SelectedItem.Services
  },

  {
    title: "iMac & Windows",
    imageUrl: iMac,
    type: SelectedItem.iMac
  },

  {
    title: "Console",
    imageUrl: Console,
    type: SelectedItem.Console
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;

};

const Pricing = ({ setSelectedPage }: Props) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>(SelectedItem.None);
  const [data, setData] = useState<RepairListProps[]>([]);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
 

  return (
    <section id="pricing" className="mx-auto min-h-min w-5/6 py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>PRICING</HText>
          
        </motion.div>

        {isAboveMediumScreens ? (
           <motion.div
           className="mt-5 items-center justify-between gap-8 md:flex"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           variants={container}
         >
           {pricing.map((pricing: PricingType) => (
             <PricingComponent
               setData={setData}
               imageUrl={pricing.imageUrl}
               key={pricing.title}
               title={pricing.title}
               setSelectedItem={setSelectedItem}
               type= {pricing.type}
               selectedItem = {selectedItem}
             />
           ))}
         </motion.div>
        ) :(
          <div className="mt-5 items-center justify-between gap-8 md:flex">
          {pricing.map((pricing: PricingType) => (
            <PricingComponent
              setData={setData}
              imageUrl={pricing.imageUrl}
              key={pricing.title}
              title={pricing.title}
              setSelectedItem={setSelectedItem}
              type={pricing.type}
              selectedItem={selectedItem}
            />
          ))}
        </div>
        )}
       
          


       {selectedItem !== SelectedItem.None && (
          <PriceList  data={data}  setSelectedItem={setSelectedItem}/>
       )}

      </motion.div>
      
    </section>
  );
};

export default Pricing;
