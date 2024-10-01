import Logo from "@/assets/Logo.webp";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-gray-20 pt-16 pb-2">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Your Trusted Apple Device Repair Shop
          </p>
          <p>© Electrohut All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <ul className="flex flex-col space-y-4 pt-4">
            <li><a href={`#${SelectedPage.Home}`}  onClick={() => setSelectedPage(SelectedPage.Home)} className="hover:underline">Home</a></li>
            <li><a href={`#${SelectedPage.Services}`}  onClick={() => setSelectedPage(SelectedPage.Services)} className="hover:underline">Services</a></li>
            <li><a href={`#${SelectedPage.Pricing}`}  onClick={() => setSelectedPage(SelectedPage.Pricing)} className="hover:underline">Pricing</a></li>
            <li><a href={`#${SelectedPage.ContactUs}`}  onClick={() => setSelectedPage(SelectedPage.ContactUs)} className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <div>
        <h4 className="font-bold">Follow Us</h4>
      <ul className="flex space-x-4 py-4">
        <li><a href="https://www.facebook.com/electrohutsa" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-500">Facebook</a></li>
        <li><a href="https://www.instagram.com/p/C4UlzZdqkZU/?img_index=electrohut_pty_ltd" target="_blank" rel="noopener noreferrer" className="hover:underline  hover:text-blue-500">Instagram</a></li>
        <li><a href="https://wa.me/27634443944" target="_blank" rel="noopener noreferrer" className="hover:underline  hover:text-blue-500">Whatsapp</a></li>
      </ul>
    </div>
          <h4 className="font-bold">Contact Us</h4>
          <ul>
            <li>Location: <a href="https://www.google.com/search?sca_esv=53e2e05af3debceb&sca_upv=1&rlz=1C1FKPE_enZA1121ZA1121&q=electrohut+sa&source=lnms&fbs=AEQNm0AeMNWKf4PpcKMI-eSa16lJoRPMIuyspCxWO6iZW9F1Ns6EVsgc0W_0xN47PHaanAEtg26fpfc9gg2y1-ZsywNNidIzOA0khSyMN51n7r3LlCN1M2Qvu76xqhq8ZDzUz3QjRfF2HLyV2ldaCxuWbSUHZYxzFFv154NlyEUW1OeFwXcGcSyQr3pVDFp-PfYkJR9qH_De_cBIcEiN4tQKcLlPz-MFxQ&sa=X&ved=2ahUKEwiK-ILsw-qIAxXBUqQEHYJWCNMQ0pQJegQIDRAB&biw=1920&bih=945&dpr=1" className="my-5 text-blue-500 hover:underline">58 Loop Street Cape Town</a></li>
            <li>Phone: <a href="tel:+27634443944" className="my-5 hover:text-blue-500 hover:underline">+27 634 443 944</a></li>
            <li>Email:  <a href="mailto:info@electrohut.co.za" className="my-5 hover:text-blue-500 hover:underline">info@electrohut.co.za</a></li>
            <li>Website: <a href={`#${SelectedPage.Home}`} className="my-5 hover:text-blue-500 hover:underline">www.electrohut.co.za</a></li>
            <li>Hours: Mon to Fri 8:30am - 6pm, Sat: til 2pm</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
    <p className="text-sm text-gray-400">Powered by Horizon Developers.</p>
  </div>
    </footer>
  );
};

export default Footer;
