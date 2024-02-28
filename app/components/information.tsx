import '../globals.css'
import { Parallax, Background } from 'react-parallax'
// import { Animate, initTE } from "tw-elements";
// initTE({ Animate });
import Map from './map'
import React from 'react'
import Slider from './Slider'
// import { url } from 'inspector';

const information = (): JSX.Element => {
  return (
        <>
        <div className="grid grid-cols-10 items-center shadow-xl bck">
            <img src="uconn.png" className="h-auto w-full col-span-1 relative left-4 drop-shadow-md filter grayscale p-7" alt="UConn logo" />
            <div className="col-span-9 ml-10">
                <span className='text-5xl tracking-widest text-uppercase text-slate-950 text-blackv'>Exploring E-Scooter Trends</span>
            </div>
        </div>
        <div className='absolute top-2/3 z-50 right-10 p-9 text-3xl animate-fadein'>
        <div className='text-white font-bold'>A deep dive into data behind </div>
        <div className='text-[color:#bbdddd] drop-shadow-md font-bold'>Electric Scooters</div>
        </div>
            <Parallax className='fallen-scooter' strength={400}>
                <Background className=''>
                    <div className='content '>
                        <img
                        src="https://cdn.sanity.io/images/xl8ls2xi/production/73097d2b39bf5fa68fa5fcb169d5151869fbff3b-2000x1156.jpg?q=85&auto=format"
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
            vitae aut deleniti provident culpa nobis ullam eos enim assumenda aliquam itaque veritatis. Facere.
            </div>
            <Parallax className='kid-on-scooter' strength={400}>
                <div className=' grid grid-cols-2 h-screen '>

                    <div className=' m-auto w-96 h-96 bg-white z-20 rounded-lg'>
                        <label className=' flex justify-center uppercase tracking-widest font-bold '>Prediction</label>
                        <Map name='pred'></Map>
                    </div>
                    <div className=' m-auto w-96 h-96 bg-white z-20 rounded-lg'>
                        <label className=' flex justify-center uppercase tracking-widest font-bold'>Real</label>
                        <Map name='real'></Map>
                    </div>
                    <div className='relative col-span-2'>
                        <div className='flex justify-center mx-auto w-11/12 rounded-full shadow-inner z-40'>
                            <div className="flex items-center w-1/2 h-8 mt-24 bg-gradient-to-r from-white via-yellow-300 to-red-500 rounded-md relative">
                                <span className='absolute left-0 ml-3 font-semibold'>Least Rides</span>
                                <span className='absolute right-0 mr-3 font-semibold'>Most Rides</span>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div className=' max-h-fit min-h-fit p-2 text-left text-[color:var(--blackv)] shadow-xl opacity-70 font-mono flex bg-[color:var(--whitev)] font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quis accusantium exercitationem deleniti eaque totam, mollitia blanditiis quisquam maiores
            quas culpa rerum vero corporis fugit magni voluptate repellat distinctio expedita tenetur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cum in natus iste dicta quo, voluptatem quibusdam
            vitae aut deleniti provident culpa nobis ullam eos enim assumenda aliquam itaque veritatis. Facere.
            </div>

            <Parallax className='scooter-hub' strength={400}>
                    <div className=' img-txt-names my-80'>
                        James Bonsu,
                        Zach Florian,
                        Shichen Ma,
                        Hayden Godfrey,
                        Robin Gould,
                        Li Yuyao
                    </div>
                <Background className=''>
                    <div className='content'>
                        <img
                        src="https://www.redbrick.me/wp-content/uploads/2021/08/ernest-ojeh-Jmz7CfSRQzI-unsplash-2.jpg"
                        className=' min-h-screen min-w-fit '
                        alt='scooter'>
                        </img>
                    </div>
                </Background>
            </Parallax>
        </>
  )
}
export default information
