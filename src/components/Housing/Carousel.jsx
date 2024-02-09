import { useState } from 'react';

function Carousel({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex -1);
  };

  const next = () => {
    setCurrentIndex(currentIndex ===  images.length - 1 ? 0 : currentIndex +1);
  };  

  return (
    <div className='carousel'>
      {images.length > 1 && <div className='arrow-previous' onClick={previous}></div>}
      {images.map((image,index) => (
        <img src={image} alt="" key={index} className={currentIndex === index ? "carousel_slide" : "carousel_slide carousel_slide-hidden"} />
      ))}
      {images.length > 1 && 
        <span className='carousel_slide_number'>
        {currentIndex + 1}/{images.length}
      </span>}
      {images.length > 1 && <div className='arrow-next' onClick={next}></div>}
    </div>
  )
}

export default Carousel
