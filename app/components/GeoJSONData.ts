import { Geometry } from "geojson";
import { Coordinate } from "mapbox-gl";

export interface GeoJSONData {
    type: 'FeatureCollection';
    features: {
      type: 'Feature';
      properties: {
        community: string;
        rides: number;
      };
      geometry: {
        type: string;
        coordinates: Geometry; // Adjust the type according to your GeoJSON data structure
      };
    }[];
  }
  