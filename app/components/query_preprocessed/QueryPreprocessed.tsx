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
                    src="https://www.tripsavvy.com/thmb/JxfvhfiP7GYuORAf14AuhykDNto=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicago-river-tourboat-downtown-chicago-skyscrapers-1139456318-b5e51582061b4c03a2ede6616ccf32da.jpg"
                    className=' min-h-screen min-w-min'
                    alt='scooter'>
                    </img>
                </div>
            </Background>
        </Parallax>
        </>
    )
}