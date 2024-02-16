import React, { useEffect, useState } from 'react';
import './ChangeColorBox.scss';
import { CgColorPicker } from "react-icons/cg";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import useLocalStorage from '../../hook/LocalStorage/useLocalStorage';
import ModeBox from '../ModeBox';

function ChangeColorBox() {
    const [openChangeBox, setOpenChangeBox] = useState(false);
    const [changeBoxColorPurple, setChangeBoxColorPurple] = useLocalStorage('changeBoxColorPurple', false);
    const [changeBoxColorOrange, setChangeBoxColorOrange] = useLocalStorage('changeBoxColorOrange', false);
    const [changeBoxColorBlue, setChangeBoxColorBlue] = useLocalStorage('changeBoxColorBlue', false);
    const [modePurple, setModePurple] = useState(false);
    const [modeOrange, setModeOrange] = useState(false);
    const [modeBlue, setModeBlue] = useState(false);

    useEffect(() => {
        if (changeBoxColorPurple) {
            changeModePurple();
        } else if (changeBoxColorOrange) {
            changeModeOrange();
        } else if (changeBoxColorBlue) {
            changeModeBlue();
        }
    }, [changeBoxColorPurple, changeBoxColorOrange, changeBoxColorBlue]);

    function handleOpenChange() {
        setOpenChangeBox(!openChangeBox);
    }

    function changeModePurple() {
        document.body.classList.add('purpleColor');
        document.body.classList.remove('orangeColor');
        document.body.classList.remove('blueColor');

        setModePurple(true);
        setModeOrange(false);
        setModeBlue(false);
    }

    function changeModeOrange() {
        document.body.classList.add('orangeColor');
        document.body.classList.remove('purpleColor');
        document.body.classList.remove('blueColor');

        setModeOrange(true);
        setModePurple(false);
        setModeBlue(false);
    }

    function changeModeBlue() {
        document.body.classList.add('blueColor');
        document.body.classList.remove('orangeColor');
        document.body.classList.remove('purpleColor');

        setModeBlue(true);
        setModePurple(false);
        setModeOrange(false);
    }

    const handleColorChange = (color) => {
        if (color === 'purple') {
            setChangeBoxColorPurple(true);
            setChangeBoxColorOrange(false);
            setChangeBoxColorBlue(false);
        } else if (color === 'orange') {
            setChangeBoxColorPurple(false);
            setChangeBoxColorOrange(true);
            setChangeBoxColorBlue(false);
        } else if (color === 'blue') {
            setChangeBoxColorPurple(false);
            setChangeBoxColorOrange(false);
            setChangeBoxColorBlue(true);
        }
    };

    return (
        <div className={`changeColorBox ${openChangeBox ? 'openChangeBox' : ""}`}>
            <ModeBox/>
            <div className="opcenChangeBox">
                <div className='radioBtn' onClick={() => handleColorChange('purple')} style={{ backgroundColor: "#F9C80E" }}>
                    <div className={`clickedBox ${changeBoxColorPurple ? 'purple' : ''}`} >
                        <MdOutlineCheckCircleOutline />
                    </div>
                </div>
                <div className='radioBtn' onClick={() => handleColorChange('orange')} style={{ backgroundColor: "#DC3918" }}>
                    <div className={`clickedBox ${changeBoxColorOrange ? 'orange' : ''}`} >
                        <MdOutlineCheckCircleOutline />
                    </div>
                </div>
                <div className='radioBtn' onClick={() => handleColorChange('blue')} style={{ backgroundColor: "#0077B6" }}>
                    <div className={`clickedBox ${changeBoxColorBlue ? 'blue' : ''}`} >
                        <MdOutlineCheckCircleOutline />
                    </div>
                </div>
            </div>
            <div className="clickBox" onClick={handleOpenChange}>
                <CgColorPicker />

            </div>
        </div>
    );
}

export default ChangeColorBox;
