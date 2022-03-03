import { useState } from 'react';
import './Hotline.css';
function Hotline( ) {
    const defaultFAQs = {
        'California Warm Peer Line: 855‑845‑7415': `
   24/7 for non-emergency support to talk to a peer counselor with lived experience
  `,
        'California Youth Crisis Line: 800‑843‑5200': `
  Youth ages 12-24 can call or text for 24/7 crisis support.
  `,
        'national treatment locator: 800‑662‑HELP':`
   If you feel like you are coping with your stress by drinking or taking drugs, there is help available from the substance use disorder programs in your county
  `,
        'National Suicide Prevention Lifeline:800-273-TALK (8255)':`
        connects you with a crisis center in the Lifeline network closest to your location. Your call will be answered by a trained crisis worker who will listen empathetically and without judgment. The crisis worker will work to ensure that you feel safe and help identify options and information about mental health services in your area
        `,
        'crisistextline: Text HOME to 741741':`get Free 24/7 support to connect with a Crisis Counselor, also available via Facebook`,
    };
    const [entries] = useState(defaultFAQs);
    const [isEntryOpen, setIsEntryOpen] = useState({});

    function toggleEntry(title) {
        setIsEntryOpen({
            ...isEntryOpen,
            [title]: !isEntryOpen[title],
        });
    }

    return (
        <div className="hotline">
            { Object.keys(entries).map( title => {
                const isOpen = isEntryOpen[title];
                return (
                    <div
                        key={title}
                        className={`accordion__entry ${isOpen ? 'accordion__entry--open' : '' }`}
                    >
                        <button
                            className="accordion__title"
                            onClick={ () => toggleEntry(title) }
                        >
                            {title}
                        </button>
                        <div className="accordion__body">{entries[title]}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default Hotline;