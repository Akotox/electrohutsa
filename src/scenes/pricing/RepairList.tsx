import { motion } from 'framer-motion';
import { RepairItem } from '../../shared/types';


type Props = {
    title: string;
    items: RepairItem[];
  };
  

const RepairList= ({ title, items }: Props)  => {
  return (
    <div className="pb-6">
      <motion.h2
        className="text-base font-bold text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {title}
      </motion.h2>

      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border-b border-gray-300 py-1"
          >
            <span className="text-sm">{item.title}</span>
            <span className="text-sm font-bold text-blue-500">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepairList;
