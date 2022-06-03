import './style.scss';

import { FiTrash2 } from "react-icons/fi";
import { useTasks } from '../../hooks/useTask';


export function TasksList(){

   const { setTasks, tasks } = useTasks();

   function handleDeleteTask(taskId: number){
      
   }

    return(
      <div className="tasks">
        {
          tasks.map(task=>(
            <div key={task.id} className="task">
            <div>
              <input type="checkbox" name="checkbox" />
            </div>
            <p className="description">{task.title}</p>
            <FiTrash2 onClick={()=>handleDeleteTask(task.id)} color="gray" style={{ cursor: 'pointer' }} />
        </div>
          ))
        }
      </div>
    )
}