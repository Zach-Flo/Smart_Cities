'use client'
import '../globals.css'
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
// Import Mapbox CSS
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoiemFjaGZsbyIsImEiOiJjbHNxbWRzeWExMXpmMmxvd3NmNmNuYzF0In0.95X4ks8jqLaf-pacJX_y4A"



const map = ({ name }): JSX.Element => {
  const mapContainer = useRef<any>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng] = useState(-87.6298)
  const [lat] = useState(41.8781)
  const [zoom] = useState(8.5)
  const [minZoom] = useState(8.6)
  
  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/zachflo/clrzpjj8401h601p53t734mu2',
      center: [lng, lat],
      zoom,
      minZoom
    })

    // Add button functionality
    const centerButton = document.getElementById('centerButton' + name);
    if(centerButton){
      centerButton.addEventListener('click', () => {
        map.current!.flyTo({
          center: [-87.6298, 41.8781], // Replace with the coordinates you want to center the map to
          zoom: 8.5,
          essential: true // This animation is considered essential with respect to prefers-reduced-motion
        });
      });
    }
    

    // map.current.scrollZoom.disable();
    map.current.on('load', () => {
      map.current!.addSource('map_data', {
        type: 'geojson',
        data: './sample.geojson'
      })
    })



  })
  return (
    <>
      <button id={`centerButton${name}`} className='button-6 '>Center</button>
      <div ref={ mapContainer } className="w-full h-full rounded-lg"></div>
    </>

  )
}
export default map
