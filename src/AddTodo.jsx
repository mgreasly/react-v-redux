import React, { useState } from "react";

export default ({ onAdd }) => {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(value);
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