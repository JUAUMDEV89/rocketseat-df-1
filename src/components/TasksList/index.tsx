import { useState } from 'react';
import './style.scss';

import { FiTrash2 } from "react-icons/fi";
import { useTasks } from '../../hooks/useTask';


export function TasksList(){

   const { setTasks, tasks } = useTasks();

   const [isCompleted, setIsCompleted] = useState(false);

   function handleDeleteTask(idTask: number){
    const newTasksArray = tasks.filter(task => task.id !== idTask);
    console.log(newTasksArray)
    setTasks(newTasksArray);
   }

   function handleUptadeTask(taskId: number){

     const task = tasks.filter(task => task.id == taskId);

     task.map(task => task.completed = true);

     localStorage.setItem('@Juaumdev89:tasks', JSON.stringify(tasks));
   }

    return(
      <div className="tasks">
        {
          tasks.map(task=>(
            <div key={task.id} className="task">
            <div>
              <input type="checkbox" name="checkbox" onChange={()=>handleUptadeTask(task.id)} />
            </div>
            <p className={task.completed ? 'taskcompleted' : 'description'}>{task.title}</p>
            <FiTrash2 onClick={()=>handleDeleteTask(task.id)} color="gray" style={{ cursor: 'pointer' }} />
        </div>
          ))
        }
      </div>
    )
}