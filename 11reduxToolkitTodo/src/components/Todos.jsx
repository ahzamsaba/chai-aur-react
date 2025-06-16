import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const handleUpdate = (id) => {
    dispatch(updateTodo({id, newText: editText}))
    setEditId(null)
    setEditText('')
  }
  
  return (
    <>
    <div className='font-semibold my-4'>Todos</div> 
    <ul className='list-none'>
      {todos.map((todo) => (
        <li
        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
        key={todo.id}
        >
          {editId === todo.id ? (
            <input
            className='text-black px-2 py-1 rounded mr-2 w-full'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <div className='text-white w-full'>{todo.text}</div>
          )}
          <div className='flex gap-2 ml-4'>
            {editId === todo.id ? (
              <button
              onClick={() => handleUpdate(todo.id)}
              className='text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600'
              >
                Save
              </button>
            ) : (
              <button 
              onClick={() => {
                setEditId(todo.id)
                setEditText(todo.text)
              }}
              className='text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600'
              >
                Edit
              </button>
            )}
          <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              />
          </svg>
          </button>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Todos