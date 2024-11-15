import React from 'react'
import productImage from '@/app/assets/dashboard.png'
import Image from 'next/image'

function ProductShowcase() {
  return (
    <section id='Product'>
        <div  className='container mx-auto px-4 text-center '>
            {/* Title text with margin bottom */}
            <div className='text-sm text-white inline-flex border border-[#fff]/10 px-3 py-1 rounded-lg tracking-tight mb-4'>
              Boost your productivity
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold   leading-snug bg-gradient-to-b from-[#e96d32] to-[#ea2b29] text-transparent bg-clip-text mt-2 mb-4">
                Enhance your productivity and elevate your efficiency with SHOU.
            </h2>

            {/* Description text */}
            <p className='text-white/60 mb-10'>
              Your complete business hub
            </p>

            {/* Product Image */}
            <Image src={productImage} alt="product image" className=' ' />
        </div>
    </section>
  )
}

export default ProductShowcase
