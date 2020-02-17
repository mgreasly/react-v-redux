import React from "react";

const Item = ({ item, toggleState }) => {
    const style = { textDecoration: item.completed ? 'line-through' : '' };
    return <li style={style}><a href='#' onClick={() => toggleState(item.id)}>{item.id}. {item.title}</a></li>
}

export default ({ list, state, toggleState }) => {
    return (
        <ul>
            {list.map(item => {
                switch (state) {
                    case 'active': if (!item.completed) return <Item key={item.id} item={item} toggleState={toggleState} />; break;
                    case 'completed': if (item.completed) return <Item key={item.id} item={item} toggleState={toggleState} />; break;
                    default: return <Item key={item.id} item={item} toggleState={toggleState} />; break;
                }
            })}
        </ul>
    )
}