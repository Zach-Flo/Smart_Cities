import ReactSlider from "react-slider";

function getTime(hour) {
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var hour12 = hour % 12 ? hour % 12 : 12;
    return hour12 + ampm;
}

const Slider = () => {

    return (
        <>
        <div className="w-6/7 left-10 w-4/5">
        <ReactSlider 
    className="left-10 mt-14"
    marks
    min={0}
    max={23}
    defaultValue={12}
    onChange={(value) => getTime(value)}
    trackClassName="slider-track"
    renderThumb={(props, state) => {
        const { key, ...rest } = props; // Extract key from props
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
        );
    }}
/>


        </div>
        <div></div>
        </>

    );
};

export default Slider;