import { useState } from "react";
import {addTodo} from '../features/todo/todoSlice'
import { useDispatch } from "react-redux";
import Todoo from "./todoo";

function AddingTodo({}){

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <div>Add Todo</div>
            <form onSubmit={addTodoHandler}>
                <input value={input} onChange={(e)=> setInput(e.target.value)} className="border-2 border-black mt-5 px-3 py-2" type="text" />
                <button type="submit">add todo</button>
            </form>
        </>
    )
}

export default AddingTodo