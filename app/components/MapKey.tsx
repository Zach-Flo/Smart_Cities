export default function MapKey(){
    return(
    <div className='relative col-span-2'>
        <div className='flex justify-center mx-auto w-11/12 rounded-full shadow-inner z-40'>
            <div className="flex items-center w-1/2 h-8 mt-24 bg-gradient-to-r from-white via-yellow-300 to-red-500 rounded-md relative">
                <span className='absolute left-0 ml-3 font-semibold'>Least Rides</span>
                <span className='absolute right-0 mr-3 font-semibold'>Most Rides</span>
            </div>
        </div>
    </div>
    )
}