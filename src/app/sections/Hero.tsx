"use client"
import { CircleChevronRight } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 700,  
      once: false,   });  
    
  }, []);
  return (
    <section  id='top'>
  <div className="container mx-auto px-4 text-center  ">
  <div className="relative mb-5 text-sm text-white inline-flex border border-[#fff]/10 px-3 py-1 rounded-lg tracking-tight mt-24 py-2">
      {/* Badge inside the border */}
      <div className="absolute top-0 left-0 transform translate-x-1 translate-y-1 bg-gradient-to-r from-[#e96d32] to-[#ea2b29] text-white text-xs font-semibold py-1 px-2 rounded-full">
        New
      </div>
      
      {/* Text after the badge */}
      <div className="ml-16"> {/* Adjust the left margin to push text after the badge */}
        Meet your AI assistant  ELENA in our next update
      </div>
    </div>
    <h1 data-aos="fade-left" className="text-3xl lg:text-5xl font-bold leading-snug text-white mt-2">
  Juggling between{' '}   
  <span className="bg-gradient-to-b from-[#e96d32] to-[#ea2b29] text-transparent bg-clip-text">
  multiple applications{' '}
  </span> to
</h1>
<h1 data-aos="fade-right" className="text-3xl lg:text-5xl font-bold leading-snug text-white mt-3">
  keep track of a{' '}
  <span className="bg-gradient-to-b from-[#e96d32] to-[#ea2b29] text-transparent bg-clip-text">
    single workflow{' '}
  </span>
  ?
</h1>


    
    <p className="text-xl  tracking-tight mt-5 text-center text-white/60">Stop right now and explore our all-in-one workspace !</p>
    <div className="flex gap-4 justify-center mt-[5%] ">
    <button
  data-aos="fade-up-right"
  className="bg-[#e96d32] text-white px-4 py-2 rounded-md font-medium inline-flex items-center justify-center tracking-tight shadow-md hover:bg-gray-100 hover:text-black transition-colors text-sm"
>
  Start for free
</button>

<button
  data-aos="fade-up-left"
  className="bg-white text-black px-4 py-2 rounded-md font-medium inline-flex items-center justify-center tracking-tight shadow-md hover:bg-gray-100 transition-colors text-sm gap-x-1"
>
  How it works
  <CircleChevronRight />
</button>

      
    </div>
  </div>
</section>

  )
}

export default HeroSection