import "./styles.css";
import React from "react";
 export default function ToDoList(props){
return(
<>
<div className='todo_style'>
  <li className='list_style'>
<i className=" fa fa-times" aria-hidden='true'
  onClick={()=>{
props.onSelect(props.id)
  }}/>
  <span> </span>
{props.text}
</li>
</div>
</>
)}