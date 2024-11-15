import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

 

const ServiceOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div id='Services' className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center  space-y-12">
<div data-aos="fade-up" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10 rounded-lg text-white bg-neutral-900">
  {/* Title and Description Section */}
  <div className="col-span-6 lg:col-span-4 flex flex-col text-center lg:text-left">
    <h2 className="text-2xl lg:text-3xl font-semibold">Explore our services</h2>
    <p className="text-gray-400 mt-2 text-sm lg:text-base">
      We provide the best services for our customers with the best quality and the best price.
    </p>
  </div>

  {/* Services Grid */}
  <div className="col-span-6 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
    {/* Service Item 1 */}
    <div className="flex items-start space-x-3 lg:space-x-4">
      <div className="bg-orange-700 rounded-full p-2 lg:p-3">
        <span className="text-xl lg:text-2xl">✴️</span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Captions with AI</h3>
        <p className="text-gray-400 text-sm lg:text-base">Your captions are generated with SHOU</p>
      </div>
    </div>

    {/* Service Item 2 */}
    <div className="flex items-start space-x-3 lg:space-x-4">
      <div className="bg-orange-700 rounded-full p-2 lg:p-3">
        <span className="text-xl lg:text-2xl">✴️</span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Post Impressions</h3>
        <p className="text-gray-400 text-sm lg:text-base">Analyze your post impressions with graphs</p>
      </div>
    </div>

    {/* Service Item 3 */}
    <div className="flex items-start space-x-3 lg:space-x-4">
      <div className="bg-orange-700 rounded-full p-2 lg:p-3">
        <span className="text-xl lg:text-2xl">✴️</span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Need a Help</h3>
        <p className="text-gray-400 text-sm lg:text-base">Get help with our latest AI</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-0.5 rounded bg-orange-700 text-white text-xs">Product</span>
          <span className="px-2 py-0.5 rounded bg-orange-700 text-white text-xs">Chatbot</span>
          <span className="px-2 py-0.5 rounded bg-orange-700 text-white text-xs">Contact us</span>
          <span className="px-2 py-0.5 rounded bg-orange-700 text-white text-xs">Issues</span>
        </div>
      </div>
    </div>

    {/* Service Item 4 */}
    <div className="flex items-start space-x-3 lg:space-x-4">
      <div className="bg-orange-700 rounded-full p-2 lg:p-3">
        <span className="text-xl lg:text-2xl">✴️</span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-semibold">Quality Images</h3>
        <p className="text-gray-400 text-sm lg:text-base">Drop your images in section from any platform you prefer</p>
      </div>
    </div>
  </div>
</div>



      {/* Additional Cards Section */}
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8  mt-10   rounded-lg text-white">
        {/* Card 1 - Chatbot */}
        <div  data-aos="fade-right" className=" p-6 rounded-lg flex flex-col items-start shadow-lg space-y-4 bg-neutral-900">
          <div className="flex items-center space-x-2">
            <div className="    bg-orange-700 rounded-full p-3">
              <span className="text-2xl">✴️</span>
            </div>
            <h3 className="text-xl font-semibold">Caps Chatbot</h3>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-400">User</p>
              <p className="text-gray-400">Hi there, I want help</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Bot</p>
              <p className="text-gray-400">Hello user, I am here to help you. How can I assist you today?</p>
            </div>
            <p className="text-orange-500 font-semibold">✔️ Problem solved</p>
          </div>
          <h4 className="text-xl font-semibold mt-4">It's safe and effective</h4>
          <p className="text-gray-400">Chat with our bot to get the best services for your business.</p>
        </div>

        {/* Card 2 - Analytics */}
        <div  data-aos="fade-left" className=" p-6 rounded-lg shadow-lg space-y-4 bg-neutral-900">
          <h3 className="text-xl font-semibold">Control your audience</h3>
          <p className="text-gray-400">Take your business to the next level with insights and analytics.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-800 p-4 rounded-lg flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">12,310</p>
              <p className="text-gray-400 text-sm">Total impressions</p>
              <p className="text-orange-500 text-xs">+9% From last month</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">5,689</p>
              <p className="text-gray-400 text-sm">Total customers</p>
              <p className="text-orange-500 text-xs">+4% From last month</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">7,923</p>
              <p className="text-gray-400 text-sm">Total revenue</p>
              <p className="text-orange-500 text-xs">+8% From last month</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg flex flex-col items-center">
              <p className="text-2xl font-semibold text-white">18,359</p>
              <p className="text-gray-400 text-sm">Total conversations</p>
              <p className="text-orange-500 text-xs">+10% From last month</p>
            </div>
          </div>
          <div className="bg-neutral-900 p-4 rounded-lg flex flex-col items-center">
            <p className="text-xl font-semibold">Customer satisfaction</p>
            <p className="text-4xl font-semibold text-white">98%</p>
            <p className="text-orange-500 text-xs">+2% From last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
