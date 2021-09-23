import React, { useState } from 'react'

function Todos() {

    const [text, setText] = useState("")
    const [todosList, setTodosList] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const payload = {status: false, title: text}
    const handleAddTodo = () => {
        setTodosList([...todosList, payload])
    }
    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Add Todo" />
            <button onClick={handleAddTodo}>Add</button>
            {todosList.map((e) => (
                <div>{e.title} : {`${e.status ? "Done" : "Not Done"}`}</div>
            ))}
        </div>
    )
}

export default Todos
