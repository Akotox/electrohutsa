import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
};

const Services = ({ title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-xl border-2 border-blue-300 px-5 py-16 text-center"
    >

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    
    </motion.div>
  );
};

export default Services;
