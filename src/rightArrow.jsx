function RightArrow({goToNextSlide}) {

    return(
        <button
            className="carousel__arrow carousel__arrow--right"
            onClick={(e) => goToNextSlide(e)}>
            ➔
        </button>
    );
}

export default RightArrow;