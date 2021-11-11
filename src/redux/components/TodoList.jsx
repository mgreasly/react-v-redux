import React from "react";
import { connectComponent } from "../store";

const Item = ({ item, toggleStatus }) => {
    const style = { textDecoration: item.completed ? 'line-through' : '' };
    return <li style={style}><a href='#' onClick={() => toggleStatus(item.id)}>{item.id}. {item.title}</a></li>
}

const ConnectedItem = connectComponent(Item);

const List = ({ list, filter }) => {
    return (
        <ul>
            {list.map(item => {
                switch (filter) {
                    case 'active': if (!item.completed) return <ConnectedItem key={item.id} item={item} />; break;
                    case 'completed': if (item.completed) return <ConnectedItem key={item.id} item={item} />; break;
                    default: return <ConnectedItem key={item.id} item={item} />; break;
                }
            })}
        </ul>
    )
};

export default connectComponent(List);