import { FormEvent, useState } from 'react';
import Logo from '../../assets/Logo.svg';

import { AiFillPlusCircle } from "react-icons/ai";

import './style.scss';

export function Header(){

    const [valueTask, setValueTask] = useState('');

    async function handleCreateTask(e: FormEvent){
       e.preventDefault();

       const tasksObject = {
           title: valueTask,
           completed: false
       }


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