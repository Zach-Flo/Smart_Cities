import ReactSlider from 'react-slider'
import React from 'react'

function getTime (hour): string {
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = ((hour % 12 !== 0 && !isNaN(hour % 12)) ? hour % 12 : 12).toString()
  return hour12 + ampm
}

const Slider = (): JSX.Element => {
  return (
        <>
        <div className=" w-5/6 ">
            <ReactSlider
              className=" w-11/12 mt-14 mx-auto"
              marks
              min={0}
              max={23}
              defaultValue={12}
              onChange={(value) => getTime(value)}
              trackClassName="slider-track"
              renderThumb={(props, state) => {
                const { key, ...rest } = props // Extract key from props
                return (
                    <div
                        key={key} // Pass key directly to JSX element
                        {...rest} // Spread the rest of the props
                        style={{
                          ...props.style,
                          zIndex: 20,
                          position: 'relative'
                        }}
                        className={`relative flex flex-col items-center w-7 h-7 outline-none text-[color:var(--whitev)] ${props.className}`}
                    >
                    <div className="absolute top-0 inline-block px-2 py-1 mb-2 -mt-10 text-xs bg-[color:var(--blackv)] rounded-sm whitespace-nowrap">
                        {getTime(state.valueNow)}
                    </div>
                    <div className="-mt-2 border-4 bg-[color:var(--whitev)] border-[color:var(--greenv)] w-7 h-7 rounded-full outline-none shadow-lg" />
                    </div>
                )
              }}
            />
        </div>

        <br></br>
        </>
  )
}
export default Slider
