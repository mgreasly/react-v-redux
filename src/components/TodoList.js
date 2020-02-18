import React from "react";
import { connectComponent } from "../store";
import { VisibilityFilters } from '../store/filterSlice';

const Item = ({ item, toggleStatus }) => {
    const style = { textDecoration: item.completed ? 'line-through' : '' };
    return <li style={style}><a href='#' onClick={() => toggleStatus(item.id)}>{item.id}. {item.title}</a></li>
}

const ConnectedItem = connectComponent(Item);

const List = ({ list, filter }) => (
    <ul>
        {list.map(item => {
            switch (filter) {
                case VisibilityFilters.SHOW_ACTIVE: if (!item.completed) return <ConnectedItem key={item.id} item={item} />; break;
                case VisibilityFilters.SHOW_COMPLETED: if (item.completed) return <ConnectedItem key={item.id} item={item} />; break;
                default: return <ConnectedItem key={item.id} item={item} />; break;
            }
        })}
    </ul>
);


export default connectComponent(List);
