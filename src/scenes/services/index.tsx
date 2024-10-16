import { ServiceType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import ServicesCard from "./Services";

const services: ServiceType[] = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfdAO0ShrvDOiLSJqT-VQz3ubaNhlPVxaoQ&s",
    title: "Board Repair Support",
    description:
      "We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks.",
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW57S_b8ozrs5jqwwesdowVytEIjkNLRArCQ&s",
    title: "Parts and Accessories",
    description:
      "Your one-stop shop for quality components and essential add-ons to enhance your device's performance.",
  },
  {
    imageUrl: "https://cruip-tutorials.vercel.app/equal-height-cards/equal-height-03.jpg",
    title: "Damage Report",
    description:
      " Documenting every scratch, crack, and malfunction to ensure your device gets the care it deserves",
  },
  {
    imageUrl: "https://www.ensureservices.com/blog/wp-content/uploads/2021/08/1200x710-3.jpg",
    title: "Data Recovery Services",
    description:
      " Our expert team specializes in recovering data from hard drives, SD cards, mobile devices, andrest oring your valuable information with ease",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-[50vh] w-5/6 py-20">
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
        <HText>SERVICES</HText>
      </motion.div>

      {/* SERVICE CARDS */}
      <div
        className="mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4"
        
      >
        {services.map((service: ServiceType) => (
          <ServicesCard
            key={service.title}
            imageUrl={service.imageUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </motion.div>
  </section>
);
};

export default Benefits;
