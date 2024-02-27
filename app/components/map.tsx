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
      style: 'mapbox://styles/zachflo/clt4vuay502ia01p6hb6sf7w3',
      center: [lng, lat],
      zoom,
      minZoom
    })

    // Centers the camera
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
    // Load the data source
    map.current.on('load', () => {
      map.current!.addSource('rides', {
        type: 'geojson',
        data: './FrequencyOfRides.geojson'
      });
      // Add a choropleth layer
      map.current!.addLayer({
        "id": "ridesChoropleth",
        "type": "fill",
        "source": "rides",
        "paint": {
            "fill-color": [
                "interpolate",
                ["linear"],
                ["get", "rides"],
                0, "#f7f7f7", // Color for lowest frequency
                20, "#ffffb2", // Color for low frequency
                30, "#fed976", // Color for moderate frequency
                40, "#feb24c", // Color for higher frequency
                50, "#fd8d3c", // Color for high frequency
                60, "#fc4e2a", // Color for very high frequency
                70, "#e31a1c", // Color for extremely high frequency
                80, "#bd0026", // Color for maximum frequency
            ],
            "fill-opacity": 0.7 // Adjust the opacity of the fill color
        }
      });
      // Add the region names layer
      map.current!.addLayer(
        {
          "id": "ridesFreq1",
          "type": "symbol",
          "paint": {
              "text-halo-color": "hsla(0, 0%, 0%, 0.04)"
          },
          "layout": {
              "text-field": ["to-string", ["get", "community"]],
              "text-font": ["Poppins Regular", "Arial Unicode MS Regular"],
              "text-letter-spacing": 0.3,
              "text-size": 7,
              "text-padding": 1,
              "text-transform": "uppercase",
              "text-justify": ["step", ["zoom"], "center", 22, "center"]
          },
          "source": "rides"
        }
      )
      // Add the borders for regions
      map.current!.addLayer({
        "id": "ridesBorders", // Unique ID for the layer
        "type": "line", // Type of layer (line or fill)
        "source": "rides", // Use the same source as the symbol layer
        "paint": {
            "line-color": "#000", // Border color
            "line-width": .2 // Border width
        }
      });
      
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
