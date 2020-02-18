import React, { useState } from "react";
import { connectComponent } from "../store";

const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connectComponent(AddTodo);
