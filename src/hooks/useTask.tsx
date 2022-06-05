import { createContext, ReactNode, useContext, useState} from 'react';

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