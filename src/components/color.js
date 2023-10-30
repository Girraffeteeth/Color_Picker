import React from 'react'
import './color.css';

const color = (props) => {
  return (
    <div>
      <div className="color" style={{backgroundColor: props.colour}} onClick={()=>props.changeColor(props.colour)} ></div>
    </div>
  )
}

export default color