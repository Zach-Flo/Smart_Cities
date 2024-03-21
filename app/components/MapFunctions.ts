import mapboxgl from "mapbox-gl";
import { MutableRefObject } from "react";


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

const LoadDataSource = (map: mapboxgl.Map, sample: string) => {
    map.addSource('rides', {
      type: 'geojson',
      data: sample
    });
};

const SetChoroplethView = (map: mapboxgl.Map, name: string) => {
    const choroplethView = document.getElementById('choroplethView' + name);
    if (choroplethView) {
      choroplethView.addEventListener('click', () => {
        map.flyTo({
          center: [-87.6298, 41.8781],
          zoom: 8.5,
          pitch: 0,
          bearing: 0,
          duration: 3000,
          essential: true
        });
  
        let opacity = 0.7;
        const interval = 100;
        const opacityDecrement = 0.05;
  
        const opacityInterval = setInterval(() => {
          opacity -= opacityDecrement;
          map.setPaintProperty('rides3D', 'fill-extrusion-opacity', opacity);
          if (opacity <= 0) {
            clearInterval(opacityInterval);
            map.removeLayer('rides3D');
          }
        }, interval);
      });
    }
  };

  const AddChoroplethLayer = (map : mapboxgl.Map) => {
    map.addLayer({
      "id": "ridesChoropleth",
      "type": "fill",
      "source": "rides",
      "paint": {
          "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "rides"],
              0, "#f7f7f7", // Color for lowest frequency
              2, "#ffffb2", // Color for low frequency
              5, "#fed976", // Color for moderate frequency
              10, "#feb24c", // Color for higher frequency
              15, "#fd8d3c", // Color for high frequency
              20, "#fc4e2a", // Color for very high frequency
              25, "#e31a1c", // Color for extremely high frequency
              30, "#bd0026", // Color for maximum frequency
          ],
          "fill-opacity": 0.7 // Adjust the opacity of the fill color
      }
    });
  }

  

export { LoadDataSource, SetChoroplethView, InitilizeMap, AddChoroplethLayer };