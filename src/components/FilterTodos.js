import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../store/reducers';

export default () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    return (
        <div>
            <span>Show: </span>
            <button disabled={filter === 'all'} onClick={() => dispatch({ type: ACTIONS.SETFILTER, filter: 'all' })}>All</button>
            <button disabled={filter === 'active'} onClick={() => dispatch({ type: ACTIONS.SETFILTER, filter: 'active' })}>Active</button>
            <button disabled={filter === 'completed'} onClick={() => dispatch({ type: ACTIONS.SETFILTER, filter: 'completed' })}>Completed</button>
        </div>
    )
};
