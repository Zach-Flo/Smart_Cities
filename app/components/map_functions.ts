

// Define the loadDataSource function
const loadDataSource = (map: mapboxgl.Map, sample: string) => {
    map.addSource('rides', {
      type: 'geojson',
      data: sample
    });
};

export const setChoroplethView = (map: mapboxgl.Map, name: string) => {
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

  

export { loadDataSource };