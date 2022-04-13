import React from 'react';

const ListItem = ({el,all,setAll,item}) => {

    const doneHandler = (id) => {
        setAll(all.map((folder)=>{
            if (folder.id === item.id){
                return {...folder, tasks : folder.tasks.map((item)=>{
                        if (item.id === id){
                            return {...item, done : !item.done}
                        } else {
                            return item
                        }
                    })}
            } else {
                return folder
            }
        }))
    }

    const deleteTask = (id) => {
        setAll(all.map((it)=>{
            if (it.id === item.id){
                return {...it, tasks : it.tasks.filter((item)=> item.id !== id)}
            } else {
                return it
            }
        }))
    }


    return (
        <li className={`folder__list-item ${el.done ? 'active' : ''}`} key={el.id}>
            <span onClick={()=> doneHandler(el.id)} className={`folder__list-circle`}> </span>
            <span className="folder__list-item-text">{el.name}</span>
            <span className="folder__list-delete folder__list-delete_qwe" onClick={()=> deleteTask(el.id)}>✘</span>
        </li>

    );
};

export default ListItem;