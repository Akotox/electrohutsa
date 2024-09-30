import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import HText from "@/shared/HText";


const ScrollableCards = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="relative mx-auto w-11/12">
      <HText>PRICING</HText>

        {/* Scrollable Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide scroll-smooth"
        >
          {/* Cards */}
          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Quick Repairs</h3>
            <p className="text-sm text-white mt-2">
              Fast and reliable repairs for your Apple devices.
            </p>
          </div>

          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Board-level Repairs</h3>
            <p className="text-sm text-white mt-2">
              Expert board-level repair solutions for advanced issues.
            </p>
          </div>

          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Certified Technicians</h3>
            <p className="text-sm text-white mt-2">
              Trust our certified experts to handle your Apple products.
            </p>
          </div>

          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Free Diagnostics</h3>
            <p className="text-sm text-white mt-2">
              We offer free diagnostics to assess your device's needs.
            </p>
          </div>

          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Certified Technicians</h3>
            <p className="text-sm text-white mt-2">
              Trust our certified experts to handle your Apple products.
            </p>
          </div>

          <div className="min-w-[250px] p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-white">Free Diagnostics</h3>
            <p className="text-sm text-white mt-2">
              We offer free diagnostics to assess your device's needs.
            </p>
          </div>

          {/* Add more cards as needed */}
        </div>

        {/* Scroll Buttons */}
        <div className="absolute bottom--2 right-0 transform translate-y-full flex gap-6 mt-6">
        <button
                    className="rounded-full bg-primary-500 p-2"
                    onClick={scrollLeft}
                    >
                       <ChevronLeftIcon className="h-6 w-6 text-white"/>
                    </button>
           
                    <button
                    className="rounded-full bg-primary-500 p-2"
                    onClick={scrollRight}
                    >
                       <ChevronRightIcon className="h-6 w-6 text-white"/>
                    </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollableCards;
