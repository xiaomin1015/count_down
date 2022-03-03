import FearListItem from './FearListItem';
import FearAddForm from './FearAddForm';
import { useState} from 'react';

function FearList({onClick,fears, onAdd, display}) {

    function onNav(e, target) {
        e.preventDefault();
        onClick(target);
    }
    const[show, setShow] = useState(false);
    function fadeIn() {
        setTimeout(() =>setShow(true), 1000);
    }

    return (
        <div className="fear-list__container">
            <ul className="fear-list">
                {
                    Object.values(fears).map( fear => (
                        <FearListItem
                            key={fear.id}
                            fear={fear}
                        />
                    ) )
                }
            </ul>
            {display && <FearAddForm onAdd={onAdd}/>}
            {!display &&
                <div>
                    <p>Congratulation! you just write down the top 3 things worry you most</p>
                    <p>Do you want to see how many people with similar anxiety with you </p>
                    {show ?
                        <button className="seeSimilar" onClick = {(e) => onNav(e,'Similar')}
                        > Let's see -></button>
                        :
                        fadeIn()
                    }

                </div>
            }
        </div>
    );
}
export default FearList;
