import '../globals.css';
import {Parallax, Background} from 'react-parallax';
//import { Animate, initTE } from "tw-elements";
//initTE({ Animate });
import Map from './map'
import FallenScooters from '../img/FallenScooters.svg';
import ScooterHub from '../img/ScooterHub.svg';
import KidOnScooter from '../img/KidOnScooter.svg';
//import { url } from 'inspector';

const information = () => {
    return (
        
        <>
        <div className='grid grid-cols-10 gaps-10 shadow-xl bck'>
        <img src="uconn.png" className="h-auto w-full col-span-1 relative -top-5 left-1  drop-shadow-md filter grayscale p-7" alt="uconn logo"></img>
        <div className='col-span-6 justify-center h-2/3 drop-shadow-md img-txt   '>Exploring E-Scooter Trends</div>
        </div>
        <div className='absolute top-2/3 z-50 right-10 p-9 text-3xl animate-fadein'>
        <div className='text-white font-bold'>A deep dive into data behind </div>
        <div className='text-[color:#bbdddd] drop-shadow-md font-bold'>Electric Scooters</div>
        </div>



            <Parallax className='fallen-scooter' strength={400}>
                <Background className=''>
                    <div className='content '>
                        <img 
                        src="https://s3-prod.crainsnewyork.com/Screen%20Shot%202023-06-16%20at%201.15.42%20PM.png"
                        className='z-10 min-h-screen  min-w-min ' 
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
                
            </Parallax>
            <div className=' max-h-fit min-h-fit p-2 text-left text-[color:var(--blackv)] shadow-xl opacity-70 font-mono flex bg-[color:var(--whitev)] font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis accusantium exercitationem deleniti eaque totam, mollitia blanditiis quisquam maiores 
            quas culpa rerum vero corporis fugit magni voluptate repellat distinctio expedita tenetur. Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Cum in natus iste dicta quo, voluptatem quibusdam 
             vitae aut deleniti provident culpa nobis ullam eos enim assumenda aliquam itaque veritatis. Facere.</div>
            <Parallax className='kid-on-scooter' strength={400}>
                <Background className=''>
                    <div className='content'>
                        <img 
                        src="https://ichef.bbci.co.uk/news/2048/cpsprodpb/ef94/live/a932c9a0-0047-11ee-beec-89f19e9787d8.jpg"
                        className='  min-w-min ' 
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
                    <div className=' img-txt-names'>
            James Bonsu,
            Zach Florian,
            Shichen Ma,
            Hayden Godfrey,
            Robin Gould,
            Li Yuyao
        </div>                        <img 
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