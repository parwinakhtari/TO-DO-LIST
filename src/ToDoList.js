import "./styles.css";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
 export default function ToDoList(props){
return(
<>
<div className='todo_style'>
  <li className='list_style'>
<DeleteIcon className="del" 
  onClick={()=>{
props.onSelect(props.id)
  }}/>
{props.text}
</li>
</div>
</>
)}