import Navbar from "@/scenes/navbar";
import { useState, useEffect } from 'react';
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home";
import Services from "@/scenes/services";
import Pricing from "@/scenes/pricing";
import ContactUs from "@/scenes/contact";
import Footer from "./scenes/footer";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   
  }, [])
  

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />

      <Home 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

     

      <Services 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Pricing 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

     

      <ContactUs setSelectedPage={setSelectedPage} />

      <Footer setSelectedPage={setSelectedPage}/>

      </div>
    </>
  );
}

export default App;