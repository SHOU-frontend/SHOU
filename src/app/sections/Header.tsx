"use client"
import { ArrowRight } from 'lucide-react';
import logo from "@/app/assets/logo.jpg";
import Image from "next/image";
import MenuIcon from '@/app/assets/menu.svg';
import { useState, useEffect } from 'react';

function Header() {
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Check the scroll position and update the state
  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY > 50) {
        setScrolled(true);  // Set to true when the page is scrolled down 50px
      } else {
        setScrolled(false); // Set to false when back to top
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 transition-all z-50 ${scrolled ? 'bg-neutral-900bg-opacity-50 backdrop-blur-lg' : 'bg-neutral-900bg-opacity-80 backdrop-blur-md'} rounded-lg shadow-lg`}>
      <div className="flex justify-center items-center py-3 text-white gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/>
        </div>
      </div> 

      <div className='py-2'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
          <div className="rounded overflow-hidden w-10 h-10">
  <Image src={logo} alt="shou logo" height={40} width={40} className="rounded " />
</div>

          
            <MenuIcon className='h-5 w-5 md:hidden text-white' />
            <nav className='hidden md:flex gap-6 text-white/60 items-center'>
            <button onClick={() => scrollToSection('top')} className="hover:text-white">How it works</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-white">Features</button>
            <button onClick={() => scrollToSection('Product')} className="hover:text-white">Product</button>
            <button onClick={() => scrollToSection('Services')} className="hover:text-white">Services</button>
            <button onClick={() => scrollToSection('Testimonials')} className="hover:text-white">Testimonials</button>
            <button onClick={() => scrollToSection('Contact')} className="hover:text-white">Contact Us</button>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
              onClick={() => window.open('https://p69cyz35nj5.typeform.com/to/Y3NpSTBy', '_blank')}
            >
              Get in touch
            </button>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
