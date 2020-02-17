import React, { useState } from "react";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from "./FilterTodos";

export default () => {

    const [list, setList] = useState([
        { id: 1, title: 'first', completed: false },
        { id: 2, title: 'second', completed: true },
        { id: 3, title: 'third', completed: false },
    ]);

    const [state, setState] = useState('all');

    const onAdd = title => setList([...list, { id: list.length + 1, title, completed: false }]);

    const toggleState = id => setList(list.map(item => item.id == id ? { id: item.id, title: item.title, completed: !item.completed } : item));

    return (
        <>
            <AddTodo onAdd={onAdd} />
            <TodoList list={list} state={state} toggleState={toggleState} />
            <FilterTodos state={state} onClick={(value => setState(value))} />
        </>
    );
}