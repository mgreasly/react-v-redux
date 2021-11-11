import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodos from "./components/FilterTodos";

export default () => {

    return (
        <Provider store={store}>
            <AddTodo />
            <TodoList />
            <FilterTodos />
        </Provider>
    );
}
