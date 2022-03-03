import { useState } from 'react';

function FearAddForm({ onAdd }) {
    const [ task, setTask ] = useState('');
    return (
        <form
            className="fear__form"
            onSubmit={ (e) => {
                e.preventDefault();
                onAdd(task);
                setTask('');
            }}
        >
            <label>
                <span>thing you fear: </span>
                <input
                    className="fear__add-text"
                    value={task}
                    onInput={ (e) => {
                        setTask(e.target.value);
                    }}
                />
            </label>
            <button type="submit" disabled={!task} >Add</button>
        </form>
    );
};
export default FearAddForm;
