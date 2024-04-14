import { useEffect } from "react";




export function formatDateAndHour(date : Date, hour : number) {
    
    date.setHours(hour);
    
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    
    const formattedDate = `${year}-${month}-${day} ${hours}:00:00`;
    
    return formattedDate;
}

export async function fetchPreProcessedJSON(){
    try{
        const response = await fetch('/output2.json');
        const data = await response.json();
        return data;
    } catch (error){
        console.error('Error fetching Preprocessed JSON file', error);
        return null;
    }
}

export async function fetchPreProcessedGEOJSON(){
    try{
        const response = await fetch('/Preprocessed.geojson');
        const data = await response.json();
        return data;
    } catch (error){
        console.error('Error fetching preprocessed geojson file', error);
        return null;
    }
}