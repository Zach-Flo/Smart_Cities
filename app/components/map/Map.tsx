'use client'
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapWrapper from './MapWrapper'
import { MutableRefObject } from 'react'
// Import Mapbox CSS
import 'mapbox-gl/dist/mapbox-gl.css';

let apiKey = "pk.eyJ1IjoiemFjaGZsbyIsImEiOiJjbHQ3cWYyN2MwYnZ3MnFvZGtxMnl0ZmVnIn0.I6mUKSYjwbuH_XX_UAEcTg";
if(process.env.NEXT_PUBLIC_MAPBOX_API_KEY){
  apiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
}
mapboxgl.accessToken = apiKey;

const InitilizeMap = (map : MutableRefObject<mapboxgl.Map | null>, mapContainer : MutableRefObject<any>, lng : number, lat: number, zoom: number, minZoom: number) => {
  if (map.current) return;

  if (!mapContainer.current) {
    console.error("Map container is not initialized");
    return;
  }

  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/zachflo/clt4vuay502ia01p6hb6sf7w3',
    center: [lng, lat],
    zoom,
    minZoom
  })
}

export default function Map ({ name, sample }): JSX.Element {

  let mapContainer = useRef<any>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng] = useState(-87.6298)
  const [lat] = useState(41.8781)
  const [zoom] = useState(8.5)
  const [minZoom] = useState(8.6)
  let mapError = false;

  useEffect(() => {
    mapContainer.current = document.getElementById(`container${name}`);
    InitilizeMap(map, mapContainer, lng, lat, zoom, minZoom)

    const mapObject = new MapWrapper(name, sample, map.current!, mapContainer);

    if(mapObject.map == null){mapError=true; return;}
    // Centers the camera and sets choropleth view
    mapObject.map.on('load', () => {
      
      mapObject.LoadDataSource(sample);

      mapObject.SetChoroplethView();
  
      mapObject.AddChoroplethLayer();
  
      //mapObject.AddRegionsLayer();
  
      mapObject.AddBordersLayer();
    });


    // Switch Layer for extrusion
    const extrusionView = document.getElementById('extrusionView' + name);
    if(extrusionView){
      extrusionView.addEventListener('click', () => {
        mapObject.SwitchToExtrusion();
      });
    }
    
    let popup : mapboxgl.Popup | null;
    mapObject.map.on('mousemove', 'ridesChoropleth', function (e) {
      let container = document.getElementById(`container${name}`)
      container!.style.cursor = "pointer"
      
      if(popup && e.features){
        popup.setLngLat(e.lngLat);
        var hoveredFeature = e.features[0].properties;
        
        // Display information in a tooltip or popup
        if (hoveredFeature){
          var regionName = hoveredFeature.community;
          var numRides = hoveredFeature.rides;
        }
        
        var tooltipText = regionName + ' - Number of rides: ' + numRides;
        popup.setHTML(tooltipText);
      }else{
        popup = mapObject.CreatePopup(e)!;
      }
      
    });
    mapObject.map.on("mouseleave", 'ridesChoropleth', function (){
      popup!.remove();
      popup = null;
    });
    
  });

  return (
    <>
      <div className=' flex justify-center'>
        <button id={`choroplethView${name}`} className='button-6'>Choropleth (Default)</button>
        <button id={`extrusionView${name}`} className='button-6'>Extrusion</button>
      </div>
      <div id={`container${name}`} ref={ mapContainer } className="w-full h-full rounded-lg"></div>
    </>

  )
}
