import React from 'react'
import acmeLogo from '@/app/assets/logo-acme.png'
import echoLogo from '@/app/assets/logo-echo.png'
import celestialLogo from '@/app/assets/logo-celestial.png'
import pulseLogo from '@/app/assets/logo-pulse.png'
import apexLogo from '@/app/assets/logo-apex.png'
import Image from "next/image"

function LogoTicker() {
  return (  
    <div className='py-32 md:py-48'>
      <div className="container mx-auto px-4 text-center text-white/60">
        <p>Companies trust us</p>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-5'>
          {/* Parent flex container */}
          <div className='flex justify-between items-center gap-10 w-full animate-marquee'>
            {/* Logo images */}
            <Image src={acmeLogo} height={60} width={60} alt="Acme Logo" className="bg-white rounded-full p-2"/>
            <Image src={echoLogo} height={60} width={60} alt="Echo Logo" className="bg-white rounded-full p-2"/>
            <Image src={celestialLogo} height={60} width={60} alt="Celestial Logo" className="bg-white rounded-full p-2"/>
            <Image src={pulseLogo} height={60} width={60} alt="Pulse Logo" className="bg-white rounded-full p-2"/>
            <Image src={apexLogo} height={60} width={60} alt="Apex Logo" className="bg-white rounded-full p-2"/>
            <Image src={acmeLogo} height={60} width={60} alt="Acme Logo" className="bg-white rounded-full p-2"/>
            <Image src={echoLogo} height={60} width={60} alt="Echo Logo" className="bg-white rounded-full p-2"/>
            <Image src={celestialLogo} height={60} width={60} alt="Celestial Logo" className="bg-white rounded-full p-2"/>
            <Image src={pulseLogo} height={60} width={60} alt="Pulse Logo" className="bg-white rounded-full p-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker
