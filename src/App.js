import React, {useEffect, useState} from 'react'
import './styles.scss'
import AllTask from "./components/AllTask/AllTask";
import AddFolder from "./components/AddFolder/AddFolder";
import Folder from "./components/Folder/Folder";
import All from './components/All/All'
import Vanta from "./components/Vanta/Vanta";

function App() {

    const [all,setAll] = useState([])
    const [folder,setFolder] = useState('')
    const [addFolder,setAddFolder] = useState(false)
    const [status,setStatus] = useState('all')


    const deleteTodo = (id) => {
        setAll(all.filter((item)=> item.id !== id))
        setStatus('all')
    }

    useEffect(()=>{
        setAll(JSON.parse(localStorage.getItem('all')))
    },[])

    useEffect(()=>{
        localStorage.setItem('all', JSON.stringify(all))
    },[all])


    return (
        <div className="App">
            <main>
                <aside className="sidebar">
                    <AllTask setStatus={setStatus}/>

                    <ul className="sidebar__list">
                        {all.map((item)=>{
                            return (
                                <li className="sidebar__list-item" key={item.id} onClick={()=> setStatus(item.name)}>
                                    <div className="sidebar__list-color" style={{backgroundColor: item.color}}> </div>
                                    {item.name}<span onClick={(e)=> {
                                    e.stopPropagation()
                                    deleteTodo(item.id)
                                    }} className="folder__list-delete">✘</span></li>
                            )
                        })}
                    </ul>

                    <AddFolder all={all} setAll={setAll} folder={folder} setFolder={setFolder} addFolder={addFolder} setAddFolder={setAddFolder}/>
                </aside>
                <section>
                    
                    {status === 'all'
                     ? <All all={all} setAll={setAll}/>
                    : <Folder setAll={setAll} status={status} all={all} setStatus={setStatus}/>
                    }
                    <Vanta/>
                </section>
            </main>
        </div>
    );
}

export default App;