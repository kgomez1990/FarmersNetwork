import React from "react";
import { SliderData } from "./SliderData";
const ImageSlider = () =>{
    return (
        <>
            {SliderData.map((slide, index) => {
            <img src={slide.image} alt='farms'/>;
                
            })}
        </>
        
    );
};

export default ImageSlider;