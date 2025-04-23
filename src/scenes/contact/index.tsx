import { SelectedPage,  } from "../../shared/types";
import { motion } from "framer-motion";
import TeamMemberCard from "./TeamCard";
// import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.webp";
// import HText from "../../shared/HText";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const teamMembers = [
    {
      image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745446338/zco2gyhbwchkpdfdqmuf.jpg",
      name: "Listen Mpimbo",
      role: "CEO/Co-founder",
      phone: "+27634443944",
      socialLinks: [
        
      ],
    },

    {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745445920/lqt27vzxmhyjdifrpqak.jpg",
        name: "Zaida Wagner",
        role: "CEO/Co-founder",
        phone: "+27794068845",
        socialLinks: [
          
        ],
      },

      {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745445920/fzzdcx4zqg4uvfm1qv7q.jpg",
        name: "Abrahamson",
        role: "Tech Department",
        phone: "+27815153706",
        socialLinks: [
          
        ],
      },
      {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745445920/mhthdqsu4ayrmsno3zmf.jpg",
        name: "Justice",
        role: "Operations manager",
        phone: "+27834377216",
        socialLinks: [
          
        ],
      },

      {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745446684/ygvx9nbswgybqxfy3lpv.jpg",
        name: "Andre",
        role: "Tech Department",
        phone: "+27631192050",
        socialLinks: [
          
        ],
      },

      {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745445919/oqvapzothauqfmmer4cs.jpg",
        name: "Micheil",
        role: "Sales Department",
        phone: "+27769050716",
        socialLinks: [
          
        ],
      },


      {
        image: "https://res.cloudinary.com/derwdq9ut/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745445920/ahnj36pdktuyonkcqhef.jpg",
        name: "Khanyiso Xhaya",
        role: "Sales Department",
        phone: "+27780077851",
        socialLinks: [
          
        ],
      },
    // Add more team members here
  ];

const ContactUs = ({ setSelectedPage }: Props) => {

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
        <p className="font-light text-black sm:text-xl dark:text-gray-400">
  Meet the innovative minds behind ElectroHut — a dedicated team driving smart tech solutions and top-tier customer experiences.
</p>
      </div>
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} role={member.role} imageUrl={member.image} phone={member.phone}  />
        ))}
      </div>
    </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
