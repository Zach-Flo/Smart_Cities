import ReactSlider from "react-slider";

function getTime(hour) {
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var hour12 = hour % 12 ? hour % 12 : 12;
    return hour12 + ampm;
}

const Slider = () => {

    return (
        <>
        <div className="w-5/6 left-10 bottom-1/2">
        <ReactSlider 
        className="left-10 mt-14"
        marks
        min={0}
        max={23}
        defaultValue={12}
        onChange={(value) => getTime(value)}
        trackClassName="slider-track"
        renderThumb = {(props, state) => ( 
            <div {...props} 
            style={{ ...props.style, zIndex: 20 }} 
            className="relative -ml-3 flex flex-col items-center w-8 h-8 -mt-2 outline-none text-[color:var(--whitev)]">
            <div className="absolute top-0 -ml-3 inline-block px-2 py-1 mb-2 -mt-8 text-xs bg-[color:var(--blackv)] rounded-sm whitespace-nowrap">
            {getTime(state.valueNow)}</div>
            <div className="mt-1 -ml-3 cursor-pointer border-4 bg-[color:var(--whitev)] border-[color:var(--greenv)] w-7 h-7 rounded-full outline-none shadow-lg" />
            </div>
            )}

        />
        </div>
        <div></div>
        </>

    );
};

export default Slider;