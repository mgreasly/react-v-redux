import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus } from '../store/listSlice';

const Item = ({ item }) => {
    const dispatch = useDispatch();
    const style = { textDecoration: item.completed ? 'line-through' : '' };
    return (
        <li style={style}>
            <a href='#' onClick={() => dispatch(toggleStatus(item.id))}>
                {item.id}. {item.title}
            </a>
        </li>
    )
}

const List = () => {
    const list = useSelector(state => state.list);
    const filter = useSelector(state => state.filter);
    return (
        <ul>
            {list.map(item => {
                switch (filter) {
                    case 'active': if (!item.completed) return <Item key={item.id} item={item} />; break;
                    case 'completed': if (item.completed) return <Item key={item.id} item={item} />; break;
                    default: return <Item key={item.id} item={item} />; break;
                }
            })}
        </ul>
    )
};

export default List;
