"use client"
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div  className="py-12 px-4 text-white">
      <div id='Contact' className="max-w-[80%] mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between py-10">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="md:w-[270px]">
              <h2 className="text-lg font-semibold">⚡ SHOU</h2>
              <b>The most powerful social media management platform for creators & businesses.</b>
              <p className="mt-2">Made in India with ❤️</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap">
            {/* Product Column */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="text-sm space-y-1 mt-4">
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Integration</li>
              </ul>
            </div>
            {/* Integrations Column */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="font-semibold mb-2">Integrations</h3>
              <ul className="text-sm space-y-1 mt-4">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            {/* Resources Column */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="text-sm space-y-1 mt-4">
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Support</li>
              </ul>
            </div>
            {/* Company Column */}
            <div className="w-1/2 md:w-1/4 mb-6">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-sm space-y-1 mt-4">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center    py-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm mt-2">Get the latest news and updates about our product.</p>
          </div>
          <form className="flex gap-2 flex-wrap space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 border border-gray-700 rounded-md text-black focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-md font-semibold text-white">Subscribe</button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 SHOU INC. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-800  cursor-pointer transition-colors">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-800 cursor-pointer transition-colors">
              <Facebook className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-800 cursor-pointer transition-colors">
              <Twitter className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-800  cursor-pointerhover:bg-gray-800">
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
