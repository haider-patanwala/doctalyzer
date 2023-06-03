import React from 'react'
import { Link } from 'react-router-dom';


export default function card() {
  const style = {
    backgroundColor:"#F9F7FD", 
    width:"250px", 
    height:"200px" ,
     margin:"0 50px 0 0 ",   
     borderRadius: "5px", 
     border: "1px solid rgb(209 213 219)"
  }
  return (
    <div style={{margin:"50px 0 0 0", width:"100vw", display:"flex", justifyContent:'center'}}>
      <div style={style}>
        <h1>Upload</h1>
        <Link to="/ocr">Click Me</Link>
      </div>
      <div style={style}>
        <h1>Medical Reoprt</h1>
        <Link to="/medical">Click Me</Link>
      </div>
    </div>
  )
}
