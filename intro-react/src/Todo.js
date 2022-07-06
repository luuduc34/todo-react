import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label className='custom-checkbox'>
        <input 
        className='check'
        type='checkbox'
        checked={todo.complete} 
        onChange={handleTodoClick} />
        
        <span className='s_lab'>{todo.name}</span>
      </label>        
    </div>
  )
}
