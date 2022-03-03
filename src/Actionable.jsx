import  Carousel  from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Actionable( ) {
    const carouselSlidesData = [
        {
            src:'./image/hiking.jpg',
            content: "take exercise even a brisk walk can clears your mind and gets you breathing more deeply",
            alt: "hiking"
        },{
            src:"./image/icecream.jpg",
            content: "It's pretty fine eat your comfort food like an icecream",
            alt: "icecream"
        },{
            src:"./image/sunlight.jpg",
            content: "going out to get some fresh air and feel the sunlight",
            alt: "sunlight"
        },{
            src:"./image/husky.jpg",
            content: "Play with adorable pet can improve your mood and reduce stress.",
            alt: "husky"
        }
    ];
    return (
        <div className = "actionable">
            <p className="actionable-infor">
                Here are some quick and actionable tips to help relieve your anxiety
            </p>
            <Carousel slides = {carouselSlidesData}/>
        </div>
    );
}
export default Actionable;