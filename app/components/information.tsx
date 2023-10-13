import '../globals.css';
import {Parallax, Background} from 'react-parallax';
import FallenScooters from '../img/FallenScooters.svg';
import ScooterHub from '../img/ScooterHub.svg';
import KidOnScooter from '../img/KidOnScooter.svg';
import { url } from 'inspector';

const information = () => {
    return (
        <>
        
            <Parallax className='fallen-scooter' bgImage={FallenScooters} strength={100}>
                <Background className=''>
                    <div className='content'>
                        <div className=' img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                        <img 
                        src="https://s3-prod.crainsnewyork.com/Screen%20Shot%202023-06-16%20at%201.15.42%20PM.png"
                        className=' min-h-screen  max-w-screen-2xl' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
                
            </Parallax>
            <div className='flex bg-white h-48'></div>
            <Parallax className='kid-on-scooter' strength={100}>
                <Background className=''>
                    <div className='content'>
                        <img 
                        src="https://npr.brightspotcdn.com/b4/cb/a34546db4848968f50a8139673a7/ap19275506168896.jpg"
                        className=' min-h-screen  max-w-screen-2xl' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
            <div className='flex bg-white h-48'></div>
            <Parallax className='scooter-hub' strength={100}>
                <Background className=''>
                    <div className='content'>
                        <div className=' img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                        <img 
                        src="https://www.redbrick.me/wp-content/uploads/2021/08/ernest-ojeh-Jmz7CfSRQzI-unsplash-2.jpg"
                        className=' min-h-screen  max-w-screen-2xl' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
        </>
    );
};
export default information;