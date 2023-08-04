import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  let style2 = {
    background: '#8062D6',
    padding: '2rem 2rem',
    borderRadius: '0.75rem',
    marginBottom: '2rem',
  }
  return (
    <div style={style2}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
