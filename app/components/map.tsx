'use client'
import '../globals.css'
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
// Import Mapbox CSS
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoiemFjaGZsbyIsImEiOiJjbHNxbWRzeWExMXpmMmxvd3NmNmNuYzF0In0.95X4ks8jqLaf-pacJX_y4A"



const map = ({ name, sample }): JSX.Element => {
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

    let rides3DLayerAdded = false; // Track whether the layer is added or not

    // Centers the camera and sets choropleth view
    const choroplethView = document.getElementById('choroplethView' + name);
    if(choroplethView){
      choroplethView.addEventListener('click', () => {
        map.current!.flyTo({
          center: [-87.6298, 41.8781], // Replace with the coordinates you want to center the map to
          zoom: 8.5,
          pitch: 0,
          bearing: 0,
          duration: 3000,
          essential: true // This animation is considered essential with respect to prefers-reduced-motion
        });
        let opacity = 0.7;
        const interval = 100; // Interval for opacity update in milliseconds
        const opacityDecrement = 0.05; // Opacity decrement for each interval

        const opacityInterval = setInterval(() => {
          opacity -= opacityDecrement;
          map.current!.setPaintProperty('rides3D', 'fill-extrusion-opacity', opacity);
          if (opacity <= 0) {
            clearInterval(opacityInterval); // Stop the interval when opacity reaches 0
            map.current!.removeLayer('rides3D'); // Remove the layer
            rides3DLayerAdded = false; // Update the flag
          }
        }, interval);
      });
    }

    // Load the data source
    map.current.on('load', () => {
      map.current!.addSource('rides', {
        type: 'geojson',
        data: sample
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

    // Switch Layer for extrusion
    const extrusionView = document.getElementById('extrusionView' + name);
    if(extrusionView){
      extrusionView.addEventListener('click', () => {
        rides3DLayerAdded = true;
        map.current!.flyTo({
          center: [-87.6298, 41.8781], // Replace with the coordinates you want to center the map to
          zoom: 9,
          pitch: 60,
          bearing: 250,
          duration: 6000,
          essential: true // This animation is considered essential with respect to prefers-reduced-motion
        });

        map.current!.addLayer({
          id: 'rides3D',
          type: 'fill-extrusion',
          source: 'rides',
          paint: {
            'fill-extrusion-color': [
              'interpolate',
              ['linear'],
              ['get', 'rides'],
              0, '#f7f7f7', // Color for lowest frequency
              20, '#ffffb2', // Color for low frequency
              30, '#fed976', // Color for moderate frequency
              40, '#feb24c', // Color for higher frequency
              50, '#fd8d3c', // Color for high frequency
              60, '#fc4e2a', // Color for very high frequency
              70, '#e31a1c', // Color for extremely high frequency
              80, '#bd0026' // Color for maximum frequency
            ],
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['get', 'rides'],
              0, 0, // Height for lowest frequency
              80, 5000 // Maximum height for maximum frequency (adjust as needed)
            ],
            'fill-extrusion-opacity': 0.7 // Adjust the opacity of the extrusions
          }
        });
        let opacity = 0;
        const duration = 3000; // Duration for opacity transition in milliseconds
        const interval = 100; // Interval for opacity update in milliseconds
        const opacityIncrement = 0.05; // Opacity increment for each interval

        const opacityInterval = setInterval(() => {
          opacity += opacityIncrement;
          map.current!.setPaintProperty('rides3D', 'fill-extrusion-opacity', opacity);
          if (opacity >= 0.7) {
            clearInterval(opacityInterval); // Stop the interval when opacity reaches 0.7
          }
        }, interval);
      });

        // Add hover interactivity
        let popup: mapboxgl.Popup | null = null; // Initialize popup reference
        map.current!.on('mousemove', 'ridesFreq1', function (e) {
          // Change the cursor style to a pointer
          map.current!.getCanvas().style.cursor = 'pointer';

          // Get the properties of the hovered feature
          if (e.features){
            var hoveredFeature = e.features[0].properties;

            // Display information in a tooltip or popup
            if (hoveredFeature){
              var regionName = hoveredFeature.community;
              var numRides = hoveredFeature.rides;
            }
            
            var tooltipText = regionName + ' - Number of rides: ' + numRides;

            // Create a tooltip and display it at the hovered location
            if (!popup){
              popup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(tooltipText)
                .addTo(map.current!);
            }
          }
      });

      // Reset the cursor style and remove the popup when the mouse leaves the region
      map.current!.on('mouseleave', 'ridesFreq1', function () {
        map.current!.getCanvas().style.cursor = 'default';
        

        // Close the popup if it exists
        if (popup) {
            popup.remove();
            popup = null; // Reset popup reference
        }
      });
    }
  })
  return (
    <>
      <button id={`choroplethView${name}`} className='button-6 '>Choropleth (Default)</button>
      <button id={`extrusionView${name}`} className='button-6' >Extrusion</button>
      <div ref={ mapContainer } className="w-full h-full rounded-lg"></div>
    </>

  )
}
export default map
