import React, { useState, useRef, useEffect } from 'react';
import iconSearch from './icons/icons8-file-26.png';
import './buttonSearch.css';

const ButtonSearch = ({ Id, HTML }) => {
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
      <CentralizedDiv isDivVisible={isDivVisible} HTML={HTML} ref={divRef} />
    </>
  );
};

const CentralizedDiv = React.forwardRef(({ isDivVisible, HTML }, ref) => {
  return (
    <>
      {isDivVisible && (
        <div id="centeredDiv" className={`centered-div `} ref={ref}
        >
          <p>{HTML}</p>
        </div>
      )}
    </>
  );
});

export default ButtonSearch;
