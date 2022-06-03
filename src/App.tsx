import { useEffect, useState } from 'react'

import Clipboard from './assets/Clipboard.svg'

import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import { useTasks } from './hooks/useTask';

import './styles/home.scss';

function App() {

  const { tasks } = useTasks();

  return (
    <>
     <Header />

     <section className='section-container'>
       <div className='section-content'>
         <div className='section-content-header'>
           <div className='task-create-quantity'>
             <span>
               Tarefas Criadas
             </span>
             <div>{tasks.length}</div>
           </div>
           <div className='task-concluded-quantity'>
             <span>
               Concluidas
             </span>
             <div>0 de {tasks.length}</div>
           </div>
         </div>

         {
           tasks.length >= 1 ? (
           <TasksList />
           ):(
            <div className="section-not-tasks">
            <img src={Clipboard} alt="Clipboard_svg" />

           <div>
             <strong>Você não tem tarefas cadastradas</strong>
             <span>Crie Tarefas e organize seus items a fazer</span>
           </div>
         </div>
           )
         }
       </div>
     </section>
    </>
  )
}

export default App;
