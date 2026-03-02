import Footer from "../components/Footer";
import Product from "../components/product";
import HomeCarousel from "../components/swiper";
import { useLocation } from "react-router-dom"
import { useEffect } from "react";

export default function Home(){
  

    
    return(
        <>
        <HomeCarousel/>
        <Product/>
        <Footer/>
        
        
        </>





    )


}