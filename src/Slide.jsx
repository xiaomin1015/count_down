import { useState } from 'react';

function Slider({index, activeIndex, slide}) {
    const src = slide.src;
    const [loading, setLoading] = useState(true);
    return(
        <li key = {index}
            className={
                index === activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <div style={{display: loading ? "block" : "none"}} className = "loader">

            </div>
            <img className= "slider--image" src ={src} onLoad={() => setLoading(false)} alt = {slide.alt}/>
            <p className="carousel-slide__content">{slide.content}</p>
        </li>
    );
}

export default Slider;
