export default function Title(){
    return(
    <div className="grid grid-cols-10 items-center shadow-xl bck">
        <img src="uconn.png" className="h-auto w-full col-span-1 relative left-4 drop-shadow-md filter grayscale p-7" alt="UConn logo" />
        <div className="col-span-9 ml-10">
            <span className='text-5xl tracking-widest text-uppercase text-slate-950 text-blackv'>Exploring E-Scooter Trends</span>
        </div>
    </div>
    )
}

export function SubTitle(){
    return(
        <div className='absolute top-2/3 z-50 right-10 p-9 text-3xl animate-fadein'>
            <div className='text-white font-bold'>A deep dive into data behind </div>
            <div className='text-[color:#bbdddd] drop-shadow-md font-bold'>Electric Scooters</div>
        </div>
    )
}