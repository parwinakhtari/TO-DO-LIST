import "./styles.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList" ;
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


export default function App() {
  const [Inputlist, setInputlist] = useState("");
  const [item, setItem] = useState([]);
  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };
  const listofItems = () => {
    setItem((olditems) => {
      return [...olditems, Inputlist];
    });
setInputlist("");
  };
const deleteItems=(id)=>{

  setItem((olditems)=>{ 
    return olditems.filter((cvalue,index)=>{
return index!==id ;
});
});
};
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> TO DO LIST</h1>
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={Inputlist}
          />
          <Button className='newBtn' onClick={listofItems}> <AddIcon/> </Button>
          <ol>         
{
  item.map( (itemval,index)=> {
  return(  
<ToDoList  
id={index}
text={itemval}
onSelect={deleteItems}
/>
);
})}   

          </ol>
        </div>
      </div>
    </>
  );
}
