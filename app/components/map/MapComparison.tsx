import TimeLabel from './TimeLabel'
import CountdownToNextHour from './CountdownToNextHour'
import Map from './Map'
import { Parallax, Background } from 'react-parallax'
import MapKey from './MapKey'

export default function MapComparison(){
    return(
        <Parallax className='kid-on-scooter' strength={400}>
            <div className='absolute ml-3'>
                <TimeLabel></TimeLabel>
                <CountdownToNextHour></CountdownToNextHour>
            </div>
            <br></br>
            <br></br>
                <div className=' grid grid-cols-2 h-screen '>
                    <div className=' m-auto w-3/4 h-96 bg-white z-20 rounded-lg'>
                        <label className=' flex justify-center uppercase tracking-widest font-bold '>Prediction</label>
                        <Map name='pred' sample='./PredictionData.geojson' showQuery={false}></Map>
                    </div>
                    <div className=' m-auto w-3/4 h-96 bg-white z-20 rounded-lg'>
                        <label className=' flex justify-center uppercase tracking-widest font-bold'>Real</label>
                        <Map name='real' sample='./RealData.geojson' showQuery={false}></Map>
                    </div>
                    <MapKey></MapKey>
                </div>
                <Background className=''>                     
                    <div className='content'>
                        <img
                        src="https://vastphotos.com/files/uploads/photos/10587/millennium-park-chicago-l.jpg?v=20220712073521"
                        className='  min-w-min '
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
    )
}
