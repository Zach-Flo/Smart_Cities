import mapboxgl from "mapbox-gl";
import {Position} from "geojson"
import {RefObject, MutableRefObject, createElement } from "react";
import {useRef} from 'react'


export default class MapWrapper {
    public map: mapboxgl.Map;
    public mapContainer: any;
    private name: string;
    private sample: string;
    
    

    constructor(name : string, sample: string, map: mapboxgl.Map, mapContainer: any) {
      this.name = name;
      this.sample = sample;
      this.map = map;
      this.mapContainer = mapContainer;
    }

    LoadDataSource(sample: string){
        if(this.map == null){return;}

        if (!this.map.getSource('rides')) {  
          this.map.addSource('rides', {
            type: 'geojson',
            data: sample
          });
        }
    };

    SetChoroplethView(){
        const choroplethView = document.getElementById('choroplethView' + this.name);
        
        if (choroplethView) {
          choroplethView.addEventListener('click', () => {
            if(this.map == null){ return; }
            this.map.flyTo({
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
              if(this.map == null){ return; }
              opacity -= opacityDecrement;
              if(this.map.getLayer("rides3D") && opacity > 0){
                this.map.setPaintProperty('rides3D', 'fill-extrusion-opacity', opacity);
                if (opacity <= 0) {
                  clearInterval(opacityInterval);
                  this.map.removeLayer('rides3D');
                }
              }
            }, interval);
            
          });
        }
    };

    AddChoroplethLayer(){
        if(this.map == null || this.map.getLayer("ridesChoropleth")){return;}
        this.map.addLayer({
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

    AddRegionsLayer(){
        if(this.map == null || this.map.getLayer("ridesFreq1")){return;}
        this.map.addLayer(
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
    }

    AddBordersLayer(){
        if(this.map == null|| this.map.getLayer("ridesBorders")){return;}
        this.map.addLayer({
            "id": "ridesBorders", // Unique ID for the layer
            "type": "line", // Type of layer (line or fill)
            "source": "rides", // Use the same source as the symbol layer
            "paint": {
                "line-color": "#000", // Border color
                "line-width": .2 // Border width
            }
          });
    }

    CreatePopup(e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] | undefined;} & mapboxgl.EventData){
        if(this.map == null){return null;}
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
          return new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(tooltipText)
          .addTo(this.map);;
        }
    }


    AddUnHoverInteractivity(popup : mapboxgl.Popup | null){
      // Close the popup if it exists
      if (popup) {
        popup.remove();
        popup = null; // Reset popup reference
      } 
    }

    SwitchToExtrusion(){
        if(this.map == null || this.map.getLayer("rides3D")){ return; }
        this.map.flyTo({
            center: [-87.6298, 41.8781], // Replace with the coordinates you want to center the map to
            zoom: 9,
            pitch: 60,
            bearing: 250,
            duration: 6000,
            essential: true // This animation is considered essential with respect to prefers-reduced-motion
          });
  
          this.map.addLayer({
            id: 'rides3D',
            type: 'fill-extrusion',
            source: 'rides',
            paint: {
              'fill-extrusion-color': [
                'interpolate',
                ['linear'],
                ['get', 'rides'],
                0, "#f7f7f7", // Color for lowest frequency
                2, "#ffffb2", // Color for low frequency
                5, "#fed976", // Color for moderate frequency
                10, "#feb24c", // Color for higher frequency
                15, "#fd8d3c", // Color for high frequency
                20, "#fc4e2a", // Color for very high frequency
                25, "#e31a1c", // Color for extremely high frequency
                30, "#bd0026", // Color for maximum frequency
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
            if(this.map == null){ return; }
            opacity += opacityIncrement;
            this.map.setPaintProperty('rides3D', 'fill-extrusion-opacity', opacity);
            if (opacity >= 0.7) {
              clearInterval(opacityInterval); // Stop the interval when opacity reaches 0.7
            }
          }, interval);
    }



}