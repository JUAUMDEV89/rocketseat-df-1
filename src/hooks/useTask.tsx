import { createContext, ReactNode, useContext, useEffect, useState} from 'react';

type TypeTaskContext = {
    tasks: TypeTasks[];
    setTasks: (tasks: any)=>void;
}

type TypeTasks = {
    id: number;
    title: string;
    completed: boolean;
}

type TypeTasksProvider = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TypeTaskContext);

export function TaskProvider({ children }: TypeTasksProvider){
  
  useEffect(()=>{
      const storage = localStorage.getItem('@Juaumdev89:tasks')

      console.log(storage)
  }, []);

  const [ tasks, setTasks ] = useState<TypeTasks[]>([]);

  return <TaskContext.Provider value={{ tasks, setTasks }}>
      { children }
  </TaskContext.Provider>
}

export function useTasks(){
    const {setTasks, tasks} = useContext(TaskContext);

    return {
        tasks,
        setTasks
    }
}