import './style.scss';

import { FiTrash2 } from "react-icons/fi";
import { useTasks } from '../../hooks/useTask';


export function TasksList(){

   const { setTasks, tasks } = useTasks();

   function handleDeleteTask(idTask: number){
    const newTasksArray = tasks.filter(task => task.id !== idTask);
    console.log(newTasksArray)
    setTasks(newTasksArray);
   }

   function handleUptadeTask(taskId: number){
     const uptatedTask = [...tasks];

     const taskExist = uptatedTask.find(task => task.id === taskId); 

     if(taskExist){
       console.log(taskExist)
     }

   }

    return(
      <div className="tasks">
        {
          tasks.map(task=>(
            <div key={task.id} className="task">
            <div>
              <input type="checkbox" name="checkbox" onChange={console.log('kkk')} />
            </div>
            <p className="description">{task.title}</p>
            <FiTrash2 onClick={()=>handleDeleteTask(task.id)} color="gray" style={{ cursor: 'pointer' }} />
        </div>
          ))
        }
      </div>
    )
}