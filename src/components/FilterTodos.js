import React from "react";
import { connectComponent } from "../store";

const FilterTodos = ({ filter, setFilter }) => (
    <div>
        <span>Show: </span>
        <button disabled={filter === 'all'} onClick={() => setFilter('all')}>All</button>
        <button disabled={filter === 'active'} onClick={() => setFilter('active')}>Active</button>
        <button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</button>
    </div>
);

export default connectComponent(FilterTodos);
