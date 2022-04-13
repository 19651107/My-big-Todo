import React from 'react';

const Form = ({addTask,setAddTask,task,setTask,addTaskInFolder,item}) => {




    return (
        <>
            <button type="button" className="sidebar__add-btn sidebar__add-btn_qwe" onClick={()=> setAddTask(true)}><span className="sidebar__add-btn-span">+</span>Добавить
                задачу
            </button>
            <div className="folder__content" style={{display : `${addTask ? 'block' : 'none'}`}}>
                <form className="folder__form" action="" onSubmit={(e)=> addTaskInFolder(e,item.id)}>
                    <input className="folder__form-input" required value={task} type="text" placeholder="Текст задачи" onChange={(e)=> setTask(e.target.value)}/>
                    <br/>
                    <button className="folder__form-add" type="submit">Добавить задачу</button>
                    <button className="folder__form-cancel" type="button" onClick={()=> {
                        setAddTask(false)
                        setTask('')
                    }}>Отмена</button>
                </form>

            </div>
        </>
    )
};

export default Form;