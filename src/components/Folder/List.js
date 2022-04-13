import React from 'react';
import ListItem from "./ListItem";

const List = ({item,all,setAll}) => {



    return (
        <>
            <ul className="folder__list">
                {item.tasks.length === 0 ? <li className="folder__list-no">В данной папке задачи отсутствуют</li> : item.tasks.map((el) => (
                        <ListItem key={item.id} el={el} item={item} all={all} setAll={setAll}/>
                    ))}

            </ul>
        </>
    );
};

export default List