import { FormEvent, useState } from 'react';
import Logo from '../../assets/Logo.svg';

import { AiFillPlusCircle } from "react-icons/ai";

import { useTasks } from '../../hooks/useTask'

import './style.scss';

export function Header(){

    const { tasks, setTasks } = useTasks();
    const [valueTask, setValueTask] = useState('');

    async function handleCreateTask(e: FormEvent){
       e.preventDefault();

       const tasksObject = {
           id: Math.floor(Math.random() * 3000),
           title: valueTask,
           completed: false
       }
       
       setTasks([...tasks, tasksObject]);

       setValueTask('');

       localStorage.setItem('@Juaumdev89:tasks', JSON.stringify(tasks));
    }

    return(
        <header className='header-container'>
            <img src={Logo} alt="Logo_svg" />

            <form onSubmit={handleCreateTask} className='header-input'>
                <input
                  type="text"
                  placeholder='Adicione uma nova tarefa'
                  value={valueTask}
                  onChange={e=>{setValueTask(e.target.value)}}
                />
                <button type="submit">
                    Criar
                    <AiFillPlusCircle color='white'/>
                </button>
            </form>
        </header>
    )
}