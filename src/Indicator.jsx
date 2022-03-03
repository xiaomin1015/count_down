
function Indicator({index,activeIndex,goToSlide}) {

    return(
        <li key = {index}>
            <button
                className={
                    index === activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                }
                onClick={e => {goToSlide(index)}}
            />
        </li>
    );
}

export default Indicator;
