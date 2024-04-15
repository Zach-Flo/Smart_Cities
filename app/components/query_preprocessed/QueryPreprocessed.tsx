import { Parallax, Background } from 'react-parallax'
import Map from '../map/Map'
import "react-datepicker"
import MyDatePicker from './MyDatePicker'
import Slider from './DiscreteSlider'
import DiscreteSlider from './DiscreteSlider'
import { fetchPreProcessedJSON, fetchPreProcessedGEOJSON, formatDateAndHour } from './Query'
import { useEffect, useState } from 'react'
import QueryComponent from './QueryComponent'

export default function QueryPreprocessed(){
    

    return(
        <>
        <Parallax className='scooter-hub' strength={400}>
            <div className=' grid grid-cols-2 h-screen bg-gradient-to-b from-0% from-slate-400/80 via-transparent to-transparent'>
                <Map name="query" sample="./Preprocessed.geojson" showQuery={true}></Map>
            </div>
            <Background className=''>
                <div className='content'>
                    <img
                    src="https://i.etsystatic.com/14727263/r/il/a04f1d/1587778285/il_fullxfull.1587778285_9jg4.jpg"
                    className=' min-h-screen min-w-min'
                    alt='scooter'>
                    </img>
                </div>
            </Background>
        </Parallax>
        </>
    )
}