import React from 'react'
import mapboxgl from 'maplibre-gl'
export default function Map() {
  const mapContainer = React.useRef<any>(null);
   const map = React.useRef<mapboxgl.Map | null>(null);
   const [lng, setLng] = React.useState(-87.6298);
   const [lat, setLat] = React.useState(41.8781); 
   const [zoom, setZoom] = React.useState(8.5);
   const [pitch, setPitch] = React.useState(50);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=b41Hlw1LqCtziUrbzgbR',
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false
    });

    /*
    map.current.addSource('property-data', {
      type: 'geojson',
      data: 'path/to/data.geojson'
    });
    */
  });
  return (
   <div ref={mapContainer}  className="flex flex-col h-screen my-auto items-center bgimg bg-cover -z-10"></div>
  )
}