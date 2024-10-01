import { SelectedItem } from "../../shared/types";
import {  XMarkIcon } from "@heroicons/react/24/solid";
import RepairList from "./RepairList";
import { RepairListProps } from "../../shared/types";


type Props = {
  setSelectedItem: (value: SelectedItem) => void;
  data: RepairListProps[];
};



const PriceList = ({ setSelectedItem, data }: Props) => {
    return (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[400px] bg-blue-100 drop-shadow-xl">
        <div className="flex justify-end p-12">
          <button onClick={() => setSelectedItem(SelectedItem.None)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>
  
        {/* MENU ITEMS */}
        <div className="ml-[10%] mr-[5%] flex flex-col gap-10 overflow-y-auto h-[85%] custom-scrollbar pr-3">
          <div>
            {data.map((category, index) => (
              <RepairList key={index} title={category.title} items={category.items} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PriceList;
