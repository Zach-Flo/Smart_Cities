import '../globals.css';
import {Parallax} from 'react-parallax';
import FallenScooters from '../images/FallenScooters.jpg';
import ScooterHub from '../images/ScooterHub.jpg';
import KidOnScooter from '../images/KidOnScooter.jpg';
import { url } from 'inspector';

const information = () => {
    return (
        <>
            <Parallax className='fallen-scooter' strength={800}>
                <div className='content'>
                    <div className='img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                </div>
            </Parallax>
            <Parallax className='kid-on-scooter' strength={800}>
                <div className='content'>
                    <div className='img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                </div>
            </Parallax>
            <Parallax className='scooter-hub' strength={800}>
                <div className='content'>
                    <div className='img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                </div>
            </Parallax>
        </>
    );
};
export default information;