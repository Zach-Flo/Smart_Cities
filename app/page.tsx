"use client";
import './globals.css';
import {useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = "pk.eyJ1Ijoicm9iaW4tZ291bGQiLCJhIjoiY2xtdjRvN3prMGhoODJ2cXdhZWp6N3J1OSJ9.nANEhVAs8gYfm_4qGEF2aA"

function App() {
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
    map.current.on('load', () => {
      map.current!.addSource('map_data', {
        type: 'geojson',
        data: './sample.geojson'
      });
      map.current!.addLayer({
        id: 'collisions',
        type: 'circle',
        source: 'map_data',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'Trip Distance']],
            50,
            10,
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
            500,
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
    
    <div ref={ mapContainer } className="map-container" />
    <div id='header'>
      <div id='tile'>
        <h1>E-Scooter Data</h1>
        <p>Chicago, IL, USA - 2020</p>
        </div> 
        <div className='session' id='sliderbar'>
          <h2>Hour: <label id='active-hour'>12PM</label></h2>
          <input id='slider' className='row' type='range' min='0' max='23' step='1' value='12' />
        </div>
        </div>
    </>

  );
}
export default App;