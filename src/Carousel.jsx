import {useState} from 'react';
import LeftArrow from "./LeftArrow";
import RightArrow from "./rightArrow";
import Slider from "./Slide";
import Indicator from "./Indicator";
import './Carousel.css';

function Carousel({slides}) {
    const slidesLength = slides.length;
    const [activeIndex, setActiveIndex] = useState(0);
    function goToSlide(index) {
        setActiveIndex(index);
    }
    function goToPrevSlide(e) {
        e.preventDefault();
        let index = activeIndex;

        if(index < 1) {
            index = slidesLength - 1;
        } else {
            index--;
        }
        setActiveIndex(index);
    }
    function goToNextSlide(e) {
        e.preventDefault();
        let index = activeIndex;

        if(index === slidesLength - 1) {
            index = 0
        } else {
            index++;
        }
        setActiveIndex(index);
    }

    return(
        <div className='carousel'>

           <LeftArrow goToPrevSlide={goToPrevSlide}/>

            <ul className="carousel__slides">
                {slides.map((slide, index) =>
                   <Slider
                       index={index}
                       activeIndex={activeIndex}
                       slide={slide}
                   />
                )}
            </ul>

           <RightArrow goToNextSlide={goToNextSlide}/>

            <ul className="carousel__indicators">
                {slides.map((slide, index) =>
                    <Indicator
                        index={index}
                        activeIndex={activeIndex}
                        goToSlide={e =>goToSlide(index)}
                    />
                )}
            </ul>
        </div>
    );
}
export default Carousel;