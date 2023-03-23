import React from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function Form({input , setInput , toDo,setToDo}) {
    const onInputChange=(event)=>{
          setInput(event.target.value)
    }
    
    const onFormSubmit=(event)=>{
     event.preventDefault();
        setToDo([...toDo,{id:uuidv4(),title:input,completed:false}])
        setInput("")
    }
  return (
   <>
   <form onSubmit={onFormSubmit}>
   <input type="text" className="task-input"
    value={input}
    required
    onChange={onInputChange}
    />
   <button className='button-add'>Add</button>

   </form>
   </>
  )

}
