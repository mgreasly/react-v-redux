import React from "react";

export default ({ state, onClick }) => (
    <div>
        <span>Show: </span>
        <button disabled={state === 'all'} onClick={() => onClick('all')}>All</button>
        <button disabled={state === 'active'} onClick={() => onClick('active')}>Active</button>
        <button disabled={state === 'completed'} onClick={() => onClick('completed')}>Completed</button>
    </div>
);
