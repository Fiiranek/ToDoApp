import React, {useState} from 'react'

export default function AddTodo({addTodo}) {

    const [val,SetVal] = useState('')



    const handleSubmit = (e) =>{
        e.preventDefault()
        if(val === "") return
        addTodo(val);
        SetVal("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={val} onChange={e => SetVal(e.target.value)}/>
        </form>
    )
}
