import ActionButton from "@/shared/ActionButton";
import { ServiceType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/ServicesPageGraphic.png";
import Service from "./Services";

const services: Array<ServiceType> = [
  
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Board Repair Support",
    description:
      "We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Parts and Accessories",
    description:
      "Your one-stop shop for quality components and essential add-ons to enhance your device's performance.",
  },
   {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Damage Report",
    description:
      " Documenting every scratch, crack, and malfunction to ensure your device gets the care it deserves",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Data Recovery Services",
    description:
      " Our expert team specializes in recovering data from hard drives, SD cards, mobile devices, andrest oring your valuable information with ease",
  },

  // 

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

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
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
          <HText>OUR SERVICES</HText>
          
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {services.map((benefit: ServiceType) => (
            <Service
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                  MILLIONS OF SATISFIED CUSTOMERS WITH REPAIRED {" "}
                    <span className="text-primary-500">DEVICES</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 font-medium">
              Millions of customers have experienced the quality and reliability of our Apple device repair services. 
              Our skilled technicians are dedicated to restoring each device with precision, 
              whether it's a cracked screen or an advanced board-level repair. We prioritize fast,
               top-tier service that meets the highest standards, ensuring your devices are back in action quickly.
              </p>
              <p className="mb-5 font-medium">
              Customer satisfaction is our ultimate goal, and we take pride in being the go-to choice for Apple repairs. 
              By focusing on delivering exceptional results, we help keep your devices in peak condition while building 
              lasting relationships with our clients. Trust us to provide the expertise and care your Apple devices deserve.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Benefits;
