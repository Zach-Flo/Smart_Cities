"use client";
import '../globals.css';
import Slider from './Slider';
import {useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = "pk.eyJ1Ijoicm9iaW4tZ291bGQiLCJhIjoiY2xtdjRvN3prMGhoODJ2cXdhZWp6N3J1OSJ9.nANEhVAs8gYfm_4qGEF2aA"

const map = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-87.6298);
  const [lat] = useState(41.8781);
  const [zoom] = useState(10);

  useEffect(() => {
    if(map.current) return; //initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom
    })
    map.current.scrollZoom.disable();
    map.current.on('load', () => {
      map.current!.addSource('map_data', {
        type: 'geojson',
        data: './sample.geojson'
      });
      map.current!.addLayer({
        id: 'trips',
        type: 'circle',
        source: 'map_data',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'Trip Distance']],
            100,
            5,
            50000,
            24,
          ],
          'circle-color': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'Trip Distance']],
            0,
            '#2DC4B2',
            50,
            '#3BB3C3',
            1000,
            '#669EC4',
            5000,
            '#8B88B6',
            10000,
            '#A2719B',
          ],
          'circle-opacity': 0.8
        },
      });
    });
  });
  return (
    <>
    <div className="grid grid-cols-6 gap-3  absolute w-screen h-full ">
    <div ref={ mapContainer } className="map-container col-span-4 relative w-full h-screen" />
    <div className="grid grid-rows-6 col-span-2 relative w-full h-full">
    <Slider />
    <div className="grid grid-cols-3 ml-0 -mt-28 relative gaps-3 w-full ">
      <p className='button'>units</p>
      <p className='button'>city</p>
      <p className='button'>button3</p>
    </div>
    
    <div className="text-lg absolute pt-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis accusantium exercitationem deleniti eaque totam, mollitia blanditiis quisquam maiores 
            quas culpa rerum vero corporis fugit magni voluptate repellat distinctio expedita tenetur. Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Cum in natus iste dicta quo, voluptatem quibusdam 
             vitae aut deleniti provident culpa nobis ullam eos enim assumenda aliquam itaque veritatis. Facere.</div>
    </div>
      </div>
        
    </>

  );
}
export default map;
