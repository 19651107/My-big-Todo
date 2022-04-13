import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenClip,faArrowsRotate,faTrashCan } from '@fortawesome/free-solid-svg-icons'



const Title = ({item,all,setAll,setStatus}) => {

    const agreeDone = (id) => {
        setAll(all.map((el)=>{
            if (id === el.id){
                return {...el, change : !el.change}
            }
            return el
        }))
    }

    const doneTodo = (id) => {
        if (item.name.length === 0 || item.name.length < 4){
            alert('букв должно быть больше 4!')
        } else {
            setAll(all.map((el)=>{
                if (id === el.id){
                    return {...el, change : !el.change}
                }
                return el
            }))
        }
    }

    const changeTodo = (e) => {
        item.name = e.target.value
        setStatus(item.name)
    }

    const deleteDone = (id) => {
        setAll(all.map((el)=>{
            if (el.id === id){
                return {...el, tasks: el.tasks.filter((item)=> !item.done)}
            } else {
                return el
            }
        }))
    }

    return (
        <div className="folder__title-block">
            {item.change
                ?
                <>
                    <input required maxLength="17" className="folder__title-input" type="text" defaultValue={item.name} onChange={changeTodo}/>
                    <span className="folder__title-change">
                      <FontAwesomeIcon icon={faArrowsRotate} onClick={()=>doneTodo(item.id)}/>
                    </span>
                </>
                :
                <>
                    <h2 className="folder__title">{item.name}</h2>
                    <span className="folder__title-change" onClick={()=>agreeDone(item.id)}>
                      <FontAwesomeIcon icon={faPenClip}/>
                 </span>
                </>
            }
            <span title="Удалить выполненные" className="folder__title-chages" onClick={()=> deleteDone(item.id)}><FontAwesomeIcon icon={faTrashCan}/></span>
        </div>
    );
};

export default Title;