"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import {
  FaCogs,
  FaIndustry,
  FaSignal,
  FaTags,
  FaChartBar,
  FaUserTie,
  FaDollarSign,
  FaComments,
} from "react-icons/fa";
import "aos/dist/aos.css";

// Define interfaces for Feature and Service items
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="container-fulid">
        {/* Introduction Section */}
        <div id="features" className="mx-auto text-center mt-24 py-2">
          {/* <div className="relative text-sm text-white inline-flex border border-[#fff]/10 px-3 py-1 rounded-lg tracking-tight mt-24 py-2">
         
            <div className="absolute top-0 left-0 transform translate-x-1 translate-y-1 bg-gradient-to-r from-[#e96d32] to-[#ea2b29] text-white text-xs font-semibold py-1 px-2 rounded-full">
              New
            </div>
          </div> */}
          <h4
            data-aos="fade-left"
            className="text-4xl font-bold leading-snug mt-2"
          >
            A versatile application designed to enhance industry-specific
            operations by integrating
          </h4>
          <h4 data-aos="fade-right" className="text-4xl font-bold leading-snug">
            essential tools and production capabilities into a unified system
          </h4>
        </div>

        {/* Services and Stats Section */}
        <div className="container mx-auto px-4 py-10  text-white">
          <div className="rounded-lg p-8 shadow-lg">
            {/* Tag List */}
            <div className="flex flex-col items-center space-y-2 mb-[5%]">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-neutral-800 px-3 py-1 rounded-lg text-gray-300">
                  Integrated Multi-Purpose Platform
                </span>
                <span className="text-xs bg-neutral-800 px-3 py-1 rounded-lg text-gray-300">
                  Cross-Industry Applicability
                </span>
                <span className="text-xs bg-neutral-800 px-3 py-1 rounded-lg text-gray-300">
                  Overcoming connectivity Barriers
                </span>
                <span className="text-xs bg-neutral-800 px-3 py-1 rounded-lg text-gray-300">
                  Community Management
                </span>
                <span className="text-xs bg-neutral-800 px-3 py-1 rounded-lg text-gray-300">
                  Affordable pricing
                </span>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-8 text-center relative">
              {/* First Row of Service Items */}
              <ServiceItem
                icon={<FaCogs />}
                title="Integrated Multi-Purpose Platform"
                description="Efficiently bridges software and production industries to enhance operations."
              />
              <ServiceItem
                icon={<FaIndustry />}
                title="Cross-Industry Applicability"
                description="Designed to meet the needs of diverse industries with a versatile approach."
              />
              <ServiceItem
                icon={<FaSignal />}
                title="Overcoming Connectivity Barriers"
                description="Offers an offline desktop version, ensuring uninterrupted access without internet dependency."
              />

              {/* Central Icon - Positioned in the center */}
              {/* <div className="col-span-3 flex justify-center items-center">
                <div className="bg-orange-600 rounded-full text-3xl font-semibold p-4 text-white">
                  ✴️
                </div>
              </div> */}

              {/* Second Row of Service Items */}
              <ServiceItem
                icon={<FaTags />}
                title="Affordable Pricing"
                description="Competitively priced, utilizing efficient storage processes for cost-effectiveness."
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 mt-10 text-white">
          <div className="text-center">
            <h4
              data-aos="fade-left"
              className="text-4xl font-bold leading-snug  mb-10"
            >
              Simple. Harmonious. Optimized. Unified.
            </h4>
          </div>

          {/* Features Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center mt-10">
            <FeatureItem
              icon={<FaChartBar />}
              title="Production Tracking"
              description="A method for monitoring the progress and efficiency of production processes, ensuring that output meets quality standards and deadlines."
            />
            <FeatureItem
              icon={<FaUserTie />}
              title="HR Management"
              description="A system for managing employee records, recruitment, performance evaluations, attendance, leaves, and compliance with labor laws."
            />
            <FeatureItem
              icon={<FaDollarSign />}
              title="Payroll"
              description="A process for calculating and distributing employee salaries, taxes, and benefits accurately and on time."
            />
            <FeatureItem
              icon={<FaComments />}
              title="Internal Communication"
              description="A platform that facilitates effective messaging, collaboration, and information sharing among employees within an organization."
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      data-aos="fade-down"
      className="p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center space-y-4"
    >
      <div
        className="rounded p-2 flex items-center justify-center border border-orange-600 text-center text-2xl"
        style={{
          boxShadow: "inset 0 0 10px rgba(234, 43, 41, 1)", // Adjust the color and opacity to your preference
        }}
      >
        <span>{icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Service Item Component
const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div data-aos="fade-down" className="flex flex-col items-center space-y-2">
      <div className="bg-neutral-800 p-4 rounded-lg">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default Feature;
