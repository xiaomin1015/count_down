
function LeftArrow({goToPrevSlide}) {

    return(
        <button
            className="carousel__arrow carousel__arrow--left"
            onClick={(e) => goToPrevSlide(e)}>
            ➔
        </button>
    );
}

export default LeftArrow;