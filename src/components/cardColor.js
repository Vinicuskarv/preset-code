import React, { useState } from 'react';
import './cardColor.css';

function CardColor() {
    const initialColors = [
        { start: "#FF5733", end: "#FFC300" },
        { start: "#2980B9", end: "#6DD5FA" },
        { start: "#8E44AD", end: "#F39C12" },
        { start: "#D35400", end: "#3498DB" },
        { start: "#27AE60", end: "#E74C3C" },
        { start: "#9B59B6", end: "#1ABC9C" },
        { start: "#E74C3C", end: "#F39C12" },
        { start: "#3498DB", end: "#27AE60" },
        { start: "#F39C12", end: "#E74C3C" },
        { start: "#1ABC9C", end: "#3498DB" },
        { start: "#C0392B", end: "#2980B9" },
        { start: "#F39C12", end: "#8E44AD" }
      ];
  
    const [colors, setColors] = useState(initialColors);
  
    const handleColorChange = (index, property, value) => {
      const newColors = [...colors];
      newColors[index] = { ...newColors[index], [property]: value };
      setColors(newColors);
    };
  
    const GradientBox = ({ start, end, index }) => (
        <div className='col-6 col-md-4 col-lg-3'>
            <div className="gradient-box" style={{ background: `linear-gradient(to right, ${start}, ${end})` }}>
                <input type="color" className="InputModificColor" value={start} onChange={e => handleColorChange(index, 'start', e.target.value)} />
                <input type="color" className="InputModificColor" value={end} onChange={e => handleColorChange(index, 'end', e.target.value)} />
            </div>
            <div className="color-values">
                <div>Start: {start}</div>
                <div>End: {end}</div>
            </div>
        </div>
    
      
    );
  
    return (
      <>
        <h1 className='h1CampoColor'>Presert Colors</h1>
        <div className="gradient-container row">
          {colors.map((color, index) => (
            <GradientBox key={index} start={color.start} end={color.end} index={index} />
          ))}
        </div>
      </>
    );
  }

export default CardColor;
