import React from 'react'

export default function ToDoList({toDo,setToDo}) {
    const complete=(item)=>{
       
       setToDo(
        toDo.map((listItem)=>{
            if(listItem.id===item.id){
                console.log("misk")
                return{...item,completed:!listItem.completed}
            }
           
            return listItem
        })
       )
     
    }
    const deleteItem=({id})=>{
        setToDo(toDo.filter((item)=>item.id!==id))
    }
  return (
  <>
  {toDo.map((item)=>(
    <li className='list-item' key={item.id}>
     <input 
     type="text"
     value={item.title}
     className={`list ${item.completed ? "complete":""}`}
    onClick={()=>complete(item)}
    onChange={(event)=> event.preventDefault()}
     />
     <button className='button-delete' onClick={()=>deleteItem(item)}>
     <i class="fa-solid fa-xmark"></i>
        </button> 
    </li>
    
  ))}
  </>
  )
}
