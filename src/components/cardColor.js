import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useState } from 'react';
import './cardColor.css';

function CardColor() {
    const initialColors = [
      { start: "#FF5733", end: "#FFC300" },
      { start: "#2980B9", end: "#6DD5FA" },
      { start: "#8E44AD", end: "#f312d5" },
      { start: "#b6c125", end: "#33ba21" }
    ]; 
    const [colors, setColors] = useState(initialColors);

    const handleColorChange = (index, property, value) => {
        const newColors = [...colors];
        newColors[index] = { ...newColors[index], [property]: value };
        setColors(newColors);
    };

    const randomColor = () => {
        const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return randomHexColor;
    };

    const handleRandomColor = (index) => {
        const newColors = [...colors];
        newColors[index] = {
            start: randomColor(),
            end: randomColor()
        };
        setColors(newColors);
    };

    const GradientBox = ({ start, end, index }) => (
        <div className='col-6 col-md-4 col-lg-3'>
            <div className="gradient-box" style={{ background: `linear-gradient(to right, ${start}, ${end})` }}>
                <input
                    type="color"
                    className="InputModificColor"
                    defaultValue={start}
                    onBlur={e => handleColorChange(index, 'start', e.target.value)}
                />
                <input
                    type="color"
                    className="InputModificColor"
                    defaultValue={end}
                    onBlur={e => handleColorChange(index, 'end', e.target.value)}
                />
            </div>
            <div className="color-values">
                <div>Start: {start}</div>
                <div>End: {end}</div>
            </div>
        </div>
    );
      const colo1=
      `
<div class="campo"></div>
//Two colors
<style>
  .campo{
    background: "linear-gradient(to right, color1, color2)"
  }
</style>
//three colors
<style>
  .campo{
    background: "linear-gradient(to right, color1, color2, color3)"
  }
</style>
      `
    return (
        <>
            <h1 className='h1CampoColor'>Presert Colors</h1>
            
            <div className="gradient-container row">
                {colors.map((color, index) => (
                    <GradientBox key={index} start={color.start} end={color.end} index={index} />
                ))}
            </div>
            <br/>
            <div className='KitExple' style={styles.CampoCode}>
                <h4>Colors</h4>
                <div className='CampoCode' >
                    <SyntaxHighlighter language="html" style={coy}>
                        {colo1}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
}
const styles = {
  CampoCode:{
    backgroundColor:'white',
  }
};

export default CardColor;
