import React from 'react';
import ListItem from "../Folder/ListItem";

const All = ({all,setAll}) => {
    return (
        <>
            {all.reduce((acc,rec)=> acc + rec.tasks.length,0) === 0 ? <h2 className="folder__title-task">Задачи отсутствуют</h2> : <div>
                {all.map((item)=> {
                    return (
                        <div key={item.id}>
                            <h2 className="folder__title">{item.name}</h2>
                            <ul className="folder__list">
                                {item.tasks.map((el)=>(
                                    <ListItem key={el.id} el={el} item={item} all={all} setAll={setAll}/>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>}
        </>
    );
};

export default All;