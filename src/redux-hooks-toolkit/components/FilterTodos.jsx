import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, VisibilityFilters } from '../store/filterSlice';

export default () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const onClick = (value) => dispatch(setFilter(value));

    return (
        <div>
            <span>Show: </span>
            <button disabled={filter === 'all'} onClick={() => onClick(VisibilityFilters.SHOW_ALL)}>All</button>
            <button disabled={filter === 'active'} onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
            <button disabled={filter === 'completed'} onClick={() => onClick(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
        </div>
    )
};
