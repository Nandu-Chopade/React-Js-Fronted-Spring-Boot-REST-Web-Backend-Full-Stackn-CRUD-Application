import React, { useState } from 'react';

 export function Practice(prop){
   const [color , setColor] = useState("blue");
   const [colorSecond , setcolorSecond] =useState({
    color:'yellow',
    fontSize:'20px',
    border:'1px solid black'

   })
    const handleClicked = () =>{
       console.log("button got clicked !");
       setColor("red")
    }
  return(
 <>
 <h1 style={{color:color}}>{prop.names}</h1>
 <h1 style={{color:colorSecond.color , fontSize: colorSecond.fontSize, border:colorSecond.border}}>{prop.names}</h1>
 <button onClick={handleClicked}>change color</button>
 </>
  )
}
export default Practice;