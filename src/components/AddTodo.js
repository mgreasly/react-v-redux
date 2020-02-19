import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../store/reducers';

export default () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: ACTIONS.ADDTODO, title: value });
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
