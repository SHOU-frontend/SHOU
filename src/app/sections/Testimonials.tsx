import avatar1 from '@/app/assets/avatar-1.png'
import avatar2 from '@/app/assets/avatar-2.png'
import avatar3 from '@/app/assets/avatar-3.png'
import avatar4 from '@/app/assets/avatar-4.png'
import avatar5 from '@/app/assets/avatar-5.png'
import avatar6 from '@/app/assets/avatar-6.png'
import avatar7 from '@/app/assets/avatar-7.png'
import avatar8 from '@/app/assets/avatar-8.png'
import avatar9 from '@/app/assets/avatar-9.png'
import Image from "next/image"
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react'

const testimonials = [
    {
        text: "Caps AI has made managing our social media accounts a breeze!",
        imageSrc: avatar1,
        name: "Jane Smith",
        username: "@jane_smith",
    },
    {
        text: "Incredible features! The AI-powered caption generator is a game-changer.",
        imageSrc: avatar2,
        name: "Alex Johnson",
        username: "@alex_johnson",
    },
    {
        text: "Highly recommend Caps AI for anyone looking to streamline their social media.",
        imageSrc: avatar3,
        name: "Emily Brown",
        username: "@emily_brown",
    },
    {
        text: "Effortlessly schedule posts on multiple platforms with Caps AI!",
        imageSrc: avatar4,
        name: "Michael Wilson",
        username: "@michael_wilson",
    },
    {
        text: "Caps AI’s user-friendly interface is perfect for beginners and pros alike.",
        imageSrc: avatar5,
        name: "Carlos Rodriguez",
        username: "@carlos_rodriguez",
    },
    {
        text: "Excellent customer support and a fantastic tool overall.",
        imageSrc: avatar6,
        name: "William Lee",
        username: "@william_lee",
    },
    {
        text: "Caps AI has helped us reach a wider audience and grow our following.",
        imageSrc: avatar7,
        name: "Olivia Taylor",
        username: "@olivia_taylor",
    },
    {
        text: "Simply the best social media management tool out there. Period.",
        imageSrc: avatar8,
        name: "Ethan Anderson",
        username: "@ethan_anderson",
    },
    {
        text: "Caps AI has everything we need in one platform. It’s a must-have!",
        imageSrc: avatar9,
        name: "Emma Walker",
        username: "@emma_walker",
    },
];

const TestimonialsColumn = ({ testimonials, direction }) => (
    <div className={twMerge("flex gap-6", direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right')}>
        {testimonials.map(({ text, imageSrc, name, username }, index) => (
            <div key={index} className='bg-neutral-800 p-6 rounded-lg shadow-lg min-w-[300px]'>
                <div className='text-white/80'>{text}</div>
                <div className='flex items-center gap-2 mt-5'>
                    <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                    <div className='flex flex-col'>
                        <div className='font-medium text-white tracking-tight leading-5'>{name}</div>
                        <div className='text-white/60 leading-5 tracking-tight'>{username}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

function Testimonials() {
  return (
    <section id='Testimonials' className="   py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm text-white inline-flex border border-[#fff]/10 px-3 py-1 rounded-lg tracking-tight mb-4">
          Testimonials
        </div>
        <h2 className="text-5xl font-bold  leading-snug  bg-gradient-to-b from-[#e96d32] to-[#ea2b29] text-transparent bg-clip-text mt-2 mb-4">
          What people are saying
        </h2>
        <p className="text-white/60 mb-10">We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.</p>
      </div>

      <div className="flex justify-center">
        <div className="overflow-hidden w-full sm:w-1/3  md:w-1/2 lg:w-3/4 ">
          {/* Row 1 - Scroll Left */}
          <div className="flex justify-start flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
            <TestimonialsColumn testimonials={testimonials.slice(0, 5)} direction="left" />
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="flex justify-end overflow-hidden mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <TestimonialsColumn testimonials={testimonials.slice(5, 9)} direction="right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
