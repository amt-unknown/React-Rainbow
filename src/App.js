import React, { useState } from 'react'
import ColorBLock from './ColorBlock'
import ColorForm from './ColorForm'
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color,i) => {
    return(
      <ColorBLock key={i} color={color} />
    )
  })

  const checkColor = (newColor) =>  {
    const c = new Option().style;
    c.color = newColor
    return c.color !== ""
  }

  const addColor = (newColor) => {
    if(checkColor(newColor)){
      setColors([...colors, newColor])
    }
  }

  return (
    <div className="App">
      <div className="colorCards">
        {colorMap}  
      </div>
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
