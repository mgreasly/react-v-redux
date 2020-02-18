import React from "react";
import { connectComponent } from "../store";
import { VisibilityFilters } from '../store/filterSlice';

const FilterTodos = ({ filter, setFilter }) => (
    <div>
        <span>Show: {filter}</span>
        <button disabled={filter === VisibilityFilters.SHOW_ALL} onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>All</button>
        <button disabled={filter === VisibilityFilters.SHOW_ACTIVE} onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
        <button disabled={filter === VisibilityFilters.SHOW_COMPLETED} onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
    </div>
);

export default connectComponent(FilterTodos);
