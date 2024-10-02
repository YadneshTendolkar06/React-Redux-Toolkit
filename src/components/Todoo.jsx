import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todoo() {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const [edit,setEdit] = useState()
    return (
    <>
    {
        todos.map((val)=> (
            <li className='flex justify-center mt-5 gap-20 px-5 py-2 bg-slate-500' key={val.id}>
                <div className='text-white'>{val.text}</div>
                <button onClick={()=>setEdit(val.text)}>Edit</button>
            <button onClick={()=>dispatch(removeTodo(val.id))}>X</button>
            </li>
        ))
    }
    </>
    )
}

export default Todoo