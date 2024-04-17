import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./ScooterInfo.css";
import MapIncome from '@/app/components/map/MapIncome'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef<HTMLDivElement>(null);
  

  useGSAP(
    () => {
      const slides : Element[] = gsap.utils.toArray('.slide');
      slides.forEach((slide) => {
        gsap.to(slide, {
          y: 80,
          scrollTrigger: {
            trigger: slide,
            start: 'bottom bottom',
            end: 'top 25%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <>
    
    
      <div className="pb-28">
      <div className=" flex-center column w-full h-full text-black z-0" ref={main}>
      <div className='flex grid grid-cols-2 h-96 place-content-center '>
      <MapIncome>
        
      </MapIncome>
      <div>
      <div className="slide flex p-14">
        <p className="text-3xl p-14 drop-shadow-lg">Underserved communities often experience a first-mile last-mile issue with transportation.</p>
      </div>
      <div className="slide flex">
        <p className="text-3xl text-right p-14 drop-shadow-lg">Because these communities often lack cars, they rely on public transportation.</p>
      </div>
      </div>
      
      </div>
    </div>
    </div>
    
        
    </>
    
  );
}
