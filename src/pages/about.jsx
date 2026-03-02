import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};


const aboutCards = [
  { title: "Fast Experience", icon: "fa-solid fa-bolt", desc: "Shop smoothly with lightning-fast page loads and instant checkout." },
  { title: "Secure Checkout", icon: "fa-solid fa-lock", desc: "All payments are encrypted and fully secure for peace of mind." },
  { title: "Best Prices", icon: "fa-solid fa-dollar-sign", desc: "Get amazing deals and discounts on top-quality products every day." },
  { title: "Quick Delivery", icon: "fa-solid fa-truck", desc: "Receive your orders in record time with our fast delivery system." },
  { title: "24/7 Support", icon: "fa-solid fa-phone", desc: "Our team is always ready to help you with any questions." },
  { title: "Trusted Products", icon: "fa-solid fa-check-circle", desc: "We carefully select products to ensure quality and reliability." }
];



export default function About() {
  return (
    <div className="">

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}

        
        className="aboutus mt-[120px] w-full max-w-6xl mx-auto text-center py-24 rounded-xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className=" ">
            <img 
            className="animate-carmove"
            src="/car.png" alt="" />


        </div>
        <div>
            <p className="text-6xl font-bold text-orange-500">About aswaq</p>
            <p className="mt-6 md:mt-20 text-lg md:text-xl text-orange-600 leading-relaxed"> Aswaaq is a modern e-commerce platform built to make online shopping simple, fast, and enjoyable. 
We focus on clean design, smooth performance, and the best deals for everyone. 
Our goal is to create a seamless experience where customers can discover products easily, shop with confidence, and receive their orders quickly and securely.
</p>
        </div>
      </motion.section>


     <div className="pt-24 ">
        <img className="w-[500px] mx-auto" src="/why.png" alt="" />
       <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {aboutCards.map((card, i) => (
          <motion.div
            key={i}
            className="group about shadow-md shadow-orange-500/20 rounded-2xl text-center cursor-pointer "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
             whileHover={{ scale: 1.1 , transition: { duration: 0.2 }}}
            transition={{ delay: i * 0.1 }}
            
          >
            {/* أيقونة أو لوجو */}
              <i className={`${card.icon} text-orange-500 text-5xl mb-3`}></i>

            {/* Title */}
            <h3 className="font-bold text-2xl mb-2">{card.title}</h3>

            {/* Paragraph */}
            <p className="text-gray-600 text-md  transition-colors  group-hover:text-orange-500">{card.desc}</p>
          </motion.div>
        ))}

      </div>
    </div>
        




     </div>







      <Footer/>

      
    </div>
  );
}
