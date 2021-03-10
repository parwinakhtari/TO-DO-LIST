import "./styles.css";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
 export default function ToDoList(props){
return(
<>
<div className='todo_style'>
  <li className='list_style'>
<CloseIcon className="fa-times" 
  onClick={()=>{
props.onSelect(props.id)
  }}/>
{props.text}
</li>
</div>
</>
)}