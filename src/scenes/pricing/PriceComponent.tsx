import { motion } from "framer-motion";
import { SelectedItem } from "../../shared/types";
import { consoles, windows, ipad, iphone, macbook, services, RepairListProps} from '../../shared/types';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  imageUrl: string;
  title: string;
  type: SelectedItem;
  setSelectedItem: (value: SelectedItem) => void;
  setData: (value: RepairListProps[]) => void;
  selectedItem: SelectedItem;
};

const PricingComponent = ({ imageUrl, title, setSelectedItem, type, selectedItem, setData }: Props) => {
    const isSelected = type === selectedItem;
    const textColor  = isSelected ? "text-primary-500" : "text-black"

    const handleSelectedItem = (item: SelectedItem) => {
      if (selectedItem === item) {
        setSelectedItem(SelectedItem.None);
      }else{
        setSelectedItem(item);
        if(item === SelectedItem.iPhone){
          setData(iphone)
        }else if(item === SelectedItem.iPad){
          setData(ipad)
        }else if(item === SelectedItem.Macbooks){
          setData(macbook)
        }else if(item === SelectedItem.Services){
          setData(services)
        }else if(item === SelectedItem.iMac){
          setData(windows)
        }else if(item === SelectedItem.Console){
          setData(consoles)
        }
      }
    };

  
    return (
    <motion.div
      variants={childVariant}
      className="px-5 py-16 text-center"
    >
     <motion.div
  variants={childVariant}
  className="relative overflow-hidden group" // Added 'group' class for hover effects
  whileHover={{ scale: 1.05 }} // Adds hover animation
  whileTap={{ scale: 0.95 }}   // Adds click animation
  onClick={() => handleSelectedItem(type)}
>
  {/* "Click Me" Button - Initially hidden, only appears on hover */}
  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button className="text-secondary-500 px-4 py-2 rounded-md border-2 border-secondary-500 ">
      Click Me
    </button>
  </div>

  {/* Image */}
  <img
    src={imageUrl}
    alt="Service"
    className="w-200 h-200 object-cover pb-6"
  />
</motion.div>

      <h4 className={`${textColor} font-bold`}>{title.toUpperCase()}</h4>
      
    </motion.div>
  );
};

export default PricingComponent;
