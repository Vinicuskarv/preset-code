import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useState, useRef, useEffect } from 'react';
import iconSearch from './icons/icons8-file-26.png';
import './buttonSearch.css'

const ButtonSearch = ({ Id }) => {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const divRef = useRef(null);

    const toggleDivVisibility = () => {
        setIsDivVisible(!isDivVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsDivVisible(false);
            }
        };

        if (isDivVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDivVisible]);

    return (
        <>
            <div
                id={Id}
                className="ButtonSearch button-search"
                onClick={toggleDivVisibility}
            >
                <img src={iconSearch} alt="icon Search" />
            </div>
            <CentralizedDiv isDivVisible={isDivVisible} setIsDivVisible={setIsDivVisible} ref={divRef} Ide={Id} />
        </>
    );
};

const CentralizedDiv = React.forwardRef(({ isDivVisible, setIsDivVisible, Ide }, ref) => {

    let htmlCode = '';
    let cssCode = '';
    switch (Ide) {
        case 'Rounded1':
            htmlCode = `
<body>
    <button class="button">PRESSED</button>
</body>
            `;
            cssCode = `
<style>
    .button {
        padding: 10px 15px;
        border: 0;
        font-size: 14px;
        outline: none;
        background-color: rgb(60, 152, 152);
        color: rgb(255, 255, 255);
        border-radius: 30px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.562);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .button:hover{
        transform: translateY(2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.562);

    }
    .button:active{
        transform: translateY(4px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.562);
    }
</style>
            `;
            break;
            case 'Radius1':
                htmlCode = `
<body>
    <button class="button">PRESSED</button>
</body>
                `;
                cssCode = `
<style>
    .button {
        padding: 10px 15px;
        border: 0;
        font-size: 14px;
        outline: none;
        background-color: rgb(202, 91, 134);
        color: rgb(255, 255, 255);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.562);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .button:hover{
        transform: translateY(2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.562);

    }
    .button:active{
        transform: translateY(4px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.562);
    }
</style>
                `;
            break;
            case 'Squared1':
                htmlCode = `
<body>
    <button class="button">PRESSED</button>
</body>
                `;
                cssCode = `
<style>
    .button {
        padding: 10px 15px;
        border: 0;
        font-size: 14px;
        outline: none;
        background-color: rgb(88, 83, 214);
        color: rgb(255, 255, 255);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.562);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .button:hover{
        transform: translateY(2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.562);

    }
    .button:active{
        transform: translateY(4px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.562);
    }
</style>
                `;
                break;
            case 'Corners1':
                htmlCode = `
<body>
    <button class="button">PRESSED</button>
</body>
                `;
                cssCode = `
<style>
    .button {
        padding: 10px 15px;
        border: 0;
        font-size: 14px;
        outline: none;
        background-color: rgb(111, 76, 193);
        color: rgb(255, 255, 255);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.562);
        transition: transform 0.2s, box-shadow 0.2s;
        border-radius: 15px 0;
    }
    .button:hover{
        transform: translateY(2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.562);

    }
    .button:active{
        transform: translateY(4px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.562);
    }
</style>
                `;
                break;
                default:
                    console.log("erro")
                    break;
        
    }
    const [isClosing, setIsClosing] = useState(false);

    const closeDiv = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsDivVisible(false);
            setIsClosing(false);
        }, 200);
    }
    return (
        <>
            {isDivVisible && (
            <div className={`ContainerDiv ${isClosing ? 'closing' : ''}`} ref={ref}>
                <button className='IconClose' onClick={closeDiv}>X</button>
                <div className="Divhtml" >
                    <SyntaxHighlighter language="html" style={coy}>
                        {htmlCode}
                    </SyntaxHighlighter>
                </div>
                <div className="Divcss">
                    <SyntaxHighlighter language="html" style={coy}>
                        {cssCode}
                    </SyntaxHighlighter>
                </div>
            </div>
            )}
        </>
    );
});

export default ButtonSearch;
