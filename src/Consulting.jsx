import { useState } from 'react';
function Consulting() {
    const [ name, setName ] = useState('');
    const [ show, setShow] = useState(false);
    return (
        <div className = "consulting">
            <form
                onSubmit={ (e) => {
                    e.preventDefault();
                    setName(e.target.value);
                    setShow(true)
                }}
            >
                <p> If you want a professional consulting, please leave your contact information and a therapist will talk to you soon.</p>
                <div>
                    <label htmlFor="name"> *preferred name: </label>
                    <input id="name" type="text" name="name" value={name} required
                           onInput={ (e) => {
                               setName(e.target.value);
                           }}
                    />
                </div>

                <div>
                    <label htmlFor="city"> city: </label>
                    <input id="city" type="text" name="city" required/>
                </div>

                <div>
                    <label htmlFor="num"> *phone number: </label>
                    <input id="num" type="text" name="num"  required/>
                </div>

                <div className="time">
                    <label htmlFor="time"> Do you want us to get content you within an hour? </label>
                    <input id="time" type="checkbox" name="time"/>
                </div>

                <div>
                    <label htmlFor="preference"> *Please select your preference: </label>
                    <select name="sex" id="sex" required>
                        <option value="">--Please select--</option>
                        <option value="1"> a woman therapist </option>
                        <option value="2"> a man therapist</option>
                    </select>
                </div>
                <div className="button_div">
                    <button type="submit" disabled={!name}> submit</button>
                </div>
                <div style={{display: show ? "block" : "none"}}>
                    <span className = "massage">Nice! </span>

                    <span className = "massage"> we will reach out to you soon!</span>
                </div>

            </form>

        </div>
    );
}
export default Consulting;