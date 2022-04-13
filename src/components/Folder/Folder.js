import React, {useState} from 'react';
import Title from "./Title";
import List from "./List";
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid';



const Folder = ({setAll,all, status,setStatus}) => {

    const [task, setTask] = useState('')
    const [addTask, setAddTask] = useState(false)

    const addTaskInFolder = (e,id) => {
        e.preventDefault()
        setAll(all.map((item)=> {
            if (item.id === id){
                return {...item,tasks: [...item.tasks,{
                        id : uuidv4(),
                        name : task,
                        done : false,
                        change : false,
                    }]}
            } else {
                return  item
            }
        }))
        setTask('')
    }

    return (
        <>
            {all.filter((item) => item.name === status).map((item) => (
                <div className="folder" key={item.id}>
                    <Title item={item} all={all} setAll={setAll} setStatus={setStatus}/>
                    <List item={item} all={all} setAll={setAll}/>
                   <Form task={task} setTask={setTask} addTask={addTask} addTaskInFolder={addTaskInFolder} setAddTask={setAddTask} item={item}/>
                </div>
            ))}
        </>
    );
};

export default Folder;