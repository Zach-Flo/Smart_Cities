import '../globals.css';
import {Parallax, Background} from 'react-parallax';
import { Animate, initTE } from "tw-elements";
initTE({ Animate });
import Map from './map'
import FallenScooters from '../img/FallenScooters.svg';
import ScooterHub from '../img/ScooterHub.svg';
import KidOnScooter from '../img/KidOnScooter.svg';
import { url } from 'inspector';

const information = () => {
    return (
        <>
        
            <Parallax className='fallen-scooter' strength={400}>
                <Background className=''>
                    <div className='content'>
                        <div
                        data-te-animation-init
                        data-te-animation-start="onLoad"
                        data-te-animation-reset="true"
                        data-te-animation="[slide-right_1s_ease-in-out]" className=' img-txt'>Exploring E-Scooter Trends: Data Insights
                        </div>
                        <img 
                        src="https://s3-prod.crainsnewyork.com/Screen%20Shot%202023-06-16%20at%201.15.42%20PM.png"
                        className=' min-h-screen  min-w-min ' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
                
            </Parallax>
            <div className=' max-h-fit min-h-fit text-center font-mono flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis accusantium exercitationem deleniti eaque totam, mollitia blanditiis quisquam maiores 
            quas culpa rerum vero corporis fugit magni voluptate repellat distinctio expedita tenetur. Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Cum in natus iste dicta quo, voluptatem quibusdam 
             vitae aut deleniti provident culpa nobis ullam eos enim assumenda aliquam itaque veritatis. Facere.</div>
            <Parallax className='kid-on-scooter' strength={400}>
                <Background className=''>
                    <div className='content'>
                        <img 
                        src="https://npr.brightspotcdn.com/b4/cb/a34546db4848968f50a8139673a7/ap19275506168896.jpg"
                        className='  min-w-min translate-y-80' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
            <div className='flex justify-center  min-h-screen'>
                <section className=' w-10/12 flex justify-center  min-h-screen justify-items-center'>
                <Map></Map>
                </section>
            
            </div>
            
            <Parallax className='scooter-hub' strength={400}>
                <Background className=''>
                    <div className='content'>
                        <div className=' img-txt'>Exploring E-Scooter Trends: Data Insights</div>
                        <img 
                        src="https://www.redbrick.me/wp-content/uploads/2021/08/ernest-ojeh-Jmz7CfSRQzI-unsplash-2.jpg"
                        className=' min-h-screen min-w-fit ' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
        </>
    );
};
export default information;