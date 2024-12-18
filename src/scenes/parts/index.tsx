
import HText from '../../shared/HText';
import ProductCard from './ProductCard'; // Make sure this path is correct based on your project structure
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const Parts = () => {
  const products = [
    {
      title: "Batteries",
      price: "From R80.00",
      imageUrl: "https://i.ebayimg.com/images/g/AGAAAOSwf39mFeEY/s-l1600.webp",
    },
    {
      title: "Rear Housing",
      price: "From R599.00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-g6nT1a9ba3Vd7JlV_oXakXw54fd62IUaND4YTw4CTnMLDyz3COCOGKhq&s=10",
    },
    {
      title: "Front Cameras",
      price: "From R199.00",
      imageUrl: "https://img.fruugo.com/product/8/88/1606410888_0340_0340.jpg",
    },
    {
      title: "Ear Speaker | PROX",
      price: "From R199.00",
      imageUrl: "https://i.ebayimg.com/images/g/hsQAAOSwEB1k5poe/s-l1600.webp",
    },
    {
      title: "Rear Camera",
      price: "From R299.00",
      imageUrl: "https://www.mavericksales.co.za/cdn/shop/files/IP110012_750x.jpg?v=1727209468",
    },
    {
      title: "GX OLED",
      price: "From R144.00",
      imageUrl: "https://pmcjewellery.co.za/cdn/shop/products/IPXM0231.jpg?v=1691738233",
    },
    {
      title: "Loud Speaker",
      price: "From R120.00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y9FzGzlerkWIROQOWnNIpIlCDm1Wb3fIdQ&s",
    },
    {
      title: "Vibrator",
      price: "From R30.00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCdgPemxtrevDSI94pKTKjpRQcWYHyP7tMg&s",
    },
    {
        title: "Camera Lens",
        price: "From R30.00",
        imageUrl: "https://media.takealot.com/covers_images/a6ff8f2e5df548db977d6b0821cbb1e4/s-zoom.file",
      },

      {
        title: "Wireless Charging",
        price: "From 799.99",
        imageUrl: "https://m.media-amazon.com/images/I/71qvVewycfL.jpg",
      },
  ];

  return (
    <section>
        <div className='mt-10'>

            <div className='mb-10'>
        <HText>PARTS PRICES</HText>
                
            </div>
         
         <motion.div 
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 "
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           {products.map((product, index) => (
             <motion.div 
               key={index}
               variants={itemVariants}
             >
               <ProductCard
                 title={product.title}
                 price={product.price}
                 imageUrl={product.imageUrl}
               />
             </motion.div>
           ))}
         </motion.div>
        </div>
     
    </section>
  );
};

export default Parts;
