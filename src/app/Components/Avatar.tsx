'use client';
import React,{Suspense} from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Avatar = () => {
  return (
    <div className="w-full md:w-1/2 order-1 md:order-2">
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-[280px] h-[280px] md:w-[400px] md:h-[500px] mx-auto md:relative md:-top-16">
        <DotLottieReact
          src="https://lottie.host/df24c7f5-bfc2-4e7c-9802-67054986a4c4/ONRmEkCqYK.lottie"
          loop
          autoplay
        />
      </div>
    </Suspense>
  </div>
  )
}

export default Avatar