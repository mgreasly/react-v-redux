import React from "react";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from "./FilterTodos";

export default () => {

    return (
        <>
            <AddTodo />
            <TodoList />
            <FilterTodos />
        </>
    );
}
