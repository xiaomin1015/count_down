import './Similar.css'
import {useState} from "react";


function Similar( {fears, onClick, number} ) {
    const display = Object.keys(fears).length === 0;
    function onNav(e, target) {
        e.preventDefault();
        onClick(target);
    }
    const fearList = Object.values(fears);
    const reformattedArray = fearList.map((obj,i) =>{
        const rObj = {};
        rObj['fear'] = obj.task;
        rObj['num'] = number[i];
        return rObj;
    });
    const[show, setShow] = useState(false);
    function fadeIn() {
        setTimeout(() =>setShow(true), 1000);
    }
    const style = {marginTop: "2rem"}
    return (
        <div className = "similar">
            {
                display?
                    <div>
                        <p style={style}>Seems that you haven't write down things you fear, why not try to write they down first</p>
                        <button className="goBack" onClick = {(e) => onNav(e,'Write')}
                        > Write down now! </button>
                    </div>
                    :
                    <div className ="similar-container" >
                        <div className= "fear-container">
                            { reformattedArray.map( item => {
                                return (
                                    <div className="fear__entry">
                                        <div className="num_people">
                                            <span className="number">{item.num} </span>
                                            <span > people </span>
                                        </div>
                                        <p className="text__worry"> worry about: </p>
                                        <p className="text__fear-content">  {item.fear}</p>
                                    </div>
                                );
                            })}
                        </div>
                        {show ?
                        <p className = "intro-active">You are not alone, because we’re in this together.</p>
                            :
                            fadeIn()
                        }
                    </div>
            }

        </div>
    );
}
export default Similar;