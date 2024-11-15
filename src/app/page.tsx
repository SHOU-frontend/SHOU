"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "@/app/sections/Header";
import HeroSection from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import ProductShowcase from "./sections/ProductShowcase";
import ServiceOne from "./sections/ServiceOne";
import Testimonials from "./sections/Testimonials";
 
import Feature from "./sections/Feature";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,  
      once: false,  
    });
  }, []);

  return (
    <>
   
     <div className="  ">
     <Header />
    
    <div className=" ">
    <HeroSection />
    </div>
       
   
      <div data-aos="fade-up">
        <LogoTicker />
      </div>
      <div data-aos="fade-up" className="mt-5">
        <ProductShowcase />
      </div>
      <div  className="mt-5">
        <ServiceOne />
      </div>
      <div data-aos="fade-up" className="mt-5">
      <Feature />
      </div>
      <div data-aos="fade-up"  className="mt-5">
        <Testimonials />
      </div>

     </div>
        
    </>
  );
}
