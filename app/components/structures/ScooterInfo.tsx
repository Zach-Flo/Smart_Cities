import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./ScooterInfo.css";
import MapZoom from "@/app/components/map/MapZoom";
import { Parallax, Background } from 'react-parallax'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef();
  

  useGSAP(
    () => {
      const slides = gsap.utils.toArray('.slide');
      slides.forEach((slide) => {
        gsap.to(slide, {
          y: 100,
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
    <Parallax className='z-10' strength={300}>
      <Background className='w-full bg-cover drop-shadow-xl'>
      <MapZoom>

      </MapZoom>
      </Background>
      <div>
      <div className="section flex-center column w-full text-white" ref={main}>
      <div className="slide flex pb-14">
        <p className="text-3xl p-14 drop-shadow-lg">Exploring data trends for electric scooters in urban areas.</p>
      </div>
      <div className="slide flex pt-14">
        <p className="text-3xl text-right p-14 drop-shadow-lg">Our goal was to show how AI can be applied to better understand how electric scooters help to fill the transportation gaps of urban community.</p>
      </div>
      </div>
    </div>
    </Parallax>
    
        
    </>
    
  );
}
