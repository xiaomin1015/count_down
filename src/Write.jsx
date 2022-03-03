import { useState } from 'react';
import FearList from './FearList';
import './Write.css'

function Write({onClick, fears, setFears, onAdd, display}) {
    const style = {marginTop: "2rem"}
    return (
        <div className="write">
            <p style={style}>
                Anxiety is a normal reaction to uncertainty about what’s going to happen next, everyone has.
            </p>
            <p>
                It may sounds counterintuitive: to ease occasional anxiety, mental health experts recommend to face it, and understand what's worrying you.
            </p>
            <p>
                Instead of forcing yourself to calm down, why not count things down that bother you most.
            </p>
            <div className="write-form" >
                <p style={style}>
                    count down top 3 things worry you most:
                </p>
                <FearList
                    onClick = {onClick}
                    fears = {fears}
                    onAdd = {onAdd}
                    display = {display}
                />
            </div>

        </div>
    );
}

export default Write;
