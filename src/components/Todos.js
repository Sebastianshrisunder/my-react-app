import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  let mystyle = {
    height:'100%',
    color: 'white',
  }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='text-center'>Task List</h3>
      {/* {props.todos} */}
      {props.todos.length==0?<p className='text-center'>No Todos to display</p>:
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
      {/* <TodoItem todo={props.todos[0]}/> */}
    </div>
  )
}

export default Todos
