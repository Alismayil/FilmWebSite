import React, { useEffect, useState } from 'react';
import './ModeBox.scss';

function ModeBox() {
    const [mode, setMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false );

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        document.body.classList.toggle('lightMode', mode);
    }, [mode]);

    function changeMode() {
        document.body.classList.toggle('lightMode');
        setMode(!mode);
    }

    return (
        <div className='modeBox'>
            <label className="ui-switch">
                <input type="checkbox" />
                <div className="slider">
                    <div className="circle" onClick={changeMode}></div>
                </div>
            </label>
        </div>
    );
}

export default ModeBox;
