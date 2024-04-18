import React, { useEffect, useState } from 'react'
import mapboxgl from 'maplibre-gl'

type City = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const cities: City[] = [
  { id: 1, name: "New York", latitude: 40.7128, longitude: -74.0060 },
  { id: 2, name: "Los Angeles", latitude: 34.0549, longitude: -118.2426 },
  { id: 3, name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { id: 4, name: "Miami", latitude: 25.7617, longitude: -80.1918 },
  { id: 5, name: "Portland", latitude: 45.5152, longitude: -122.6784 }
];

export default function Map() {
  const [activeCity, setActiveCity] = useState<number | null>(null);
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = React.useState(-95.7129);
  const [lat, setLat] = React.useState(37.0902);
  const [zoom, setZoom] = React.useState(4);
  const [pitch, setPitch] = React.useState(55);


  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/c3d669a4-2beb-4ec8-b6fc-160ec998c86a/style.json?key=b41Hlw1LqCtziUrbzgbR',
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false
    })
  });
  return (
    <div ref={mapContainer} className="flex w-screen flex-col h-screen my-auto items-center bgimg bg-cover"></div>
  )
}