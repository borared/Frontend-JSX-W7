import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to manage the current image */
  const [image, setImage] = useState(0);
  /* You will need to hanle the click on left and right button */
  
  /* You will need to manage the cases when we are on the last image or first image*/
  const handleNext = () => {
    if(image === images.length-1){
      setImage(0);
    }else{
      setImage(image+1);
    }
  }

  const handlePrev = () => {
    if(image == 0){
      setImage(images.length-1);
    }else{
      setImage(image-1);
    }
  }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[image].src} alt={images[image].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
    </div>
  );
};
