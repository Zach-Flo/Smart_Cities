import ReactSlider from "react-slider";

const Slider = () => {
    return (
        <ReactSlider 
        className="w-5/6 left-10 top-1/4"
        trackClassName="slider-track"
        thumbClassName="slider-thumb cursor-pointer bg-[color:var(--greenv)] w-5 h-5 rounded-full outline-none"

        />

    );
};

export default Slider;