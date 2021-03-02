import React, {useState, useRef} from 'react';
import TodoL from './TodoL'
import {v4 as uuidv4 } from 'uuid'; //different ids everytime a new item is added


function App() {
  const [todos, setTodos] = useState([])
  const todoRef = useRef()

  function eHandlerAdd(e){
    //add the entered element (if any)
    const name = todoRef.current.value
    if(name == '')
      return 
    setTodos(prevTodos => {
      return ([...prevTodos, {id: 1, name: name, complete: false}])
    })
    todoRef.current.value = null
  }

  function eHandlerDelete(e){
    //delete all the items of the list
    setTodos([])
  }

  return(
  <>
  <div class = 'l3ibat'><input ref = {todoRef} type = '/text' />
  <button onClick = {eHandlerAdd} >Add a Task</button>
  <button onClick = {eHandlerDelete}>Clear Todo</button></div>
  <div class = 'list'><TodoL todos = {todos} /></div>
  </>
  )
}

export default App;
