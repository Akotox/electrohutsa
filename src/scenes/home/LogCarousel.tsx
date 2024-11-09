import React, { useEffect, useRef } from 'react';
import CompleteIT from "@/assets/cit.webp";
import Gommaxx from "@/assets/gm.webp";
import ComputerMania from "@/assets/cm.webp";
const logos = [
  { src: CompleteIT, alt: "Facebook", link: "https://www.horizondevelopers.co.za/"},
  { src: Gommaxx, alt: "Disney", link: "https://www.horizondevelopers.co.za/"},
  { src: ComputerMania, alt: "Airbnb", link: "https://www.horizondevelopers.co.za/" },
  
];

const LogoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = carouselRef.current;
    if (ul) {
      // Clone the list for infinite scrolling effect
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute('aria-hidden', 'true');
      ul.parentNode?.insertBefore(clone, ul.nextSibling);
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={carouselRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <a href={logo.link}>
            <img src={logo.src} alt={logo.alt} />

            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
