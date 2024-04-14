import "react-datepicker"
import MyDatePicker from './MyDatePicker'
import DiscreteSlider from './DiscreteSlider'
import { fetchPreProcessedJSON, fetchPreProcessedGEOJSON, formatDateAndHour } from './Query'
import { useEffect, useState } from "react"
import React from "react"
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson"


export default function QueryComponent({ onUpdateData }){
    const[selectedDate, setSelectedDate] = useState(new Date('2020-11-19'));
    const[selectedTime, setSelectedTime] = useState(0);
    const[preprocessedJSON, setPreprocessedJSON] = useState(null);
    const[geojsonData, setGeoJSONData] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);

    useEffect(() => {
        handleQuery();
    }, [selectedDate, selectedTime]);

    const handleDateChange = (date : Date) => {
        setSelectedDate(date);
        console.log(date);
    }

    const handleTimeChange = (event, newValue : number) => {
        setSelectedTime(newValue);
        console.log(newValue);
    }

    const handleQuery = () => {
        console.log(formatDateAndHour(selectedDate, selectedTime));
        const dateAndTime = formatDateAndHour(selectedDate, selectedTime);
        console.log(dateAndTime);
        if(preprocessedJSON){
            console.log(preprocessedJSON[dateAndTime]);
            if(geojsonData){
                geojsonData.features.forEach(feature => {
                    if(feature.properties){
                        const community = feature.properties.community;
                        const rides = preprocessedJSON[dateAndTime][community]
                        feature.properties.rides = rides;
                    }
                });
            }
        }
        onUpdateData(geojsonData);
    }

    useEffect(() => {
        async function fetchData() {
            setPreprocessedJSON(await fetchPreProcessedJSON());
            setGeoJSONData(await fetchPreProcessedGEOJSON());
        }    
        fetchData();
    }, []);
    return(
        <div className=' flex flex-col justify-center items-center self-center justify-self-center w-full h-full bg-gradient-to-r from-95% from-slate-400/80 to-transparent'>
            <h2 className=' absolute flex justify-self-center top-12 text-white font-bold text-shadow-custom text-4xl'>Query our pre-processed data...</h2>
            <br/><br/><br/>
            <DiscreteSlider onTimeChange={handleTimeChange}></DiscreteSlider>
            <br/>
            <MyDatePicker onDateChange={handleDateChange}></MyDatePicker>
            <br></br>
            <label className=' text-white'>Select a date between 11/18/2020 - 12/13/2020</label>
        </div>
    )
}