import { useState } from 'react';
import './Professional.css';
import Menu from './Menu';
import Hotline from './Hotline';
import Consulting from './Consulting';

function Professional( ) {
    const [item, setItem] = useState('Hotline');
    return (
        <div className = "professional">

            <p className="professional-infor">
                If none of the above tips leave you feeling more calm or you experiencing physical problems like stomach pain or a racing heart, maybe it's time to seek professional help
            </p>

            <Menu className = "local-menu" item = {item} onClick = {setItem}/>
                {item === 'Hotline' && <Hotline/>}
                {item === 'Consulting' && <Consulting/>}
        </div>
    );
}
export default Professional;