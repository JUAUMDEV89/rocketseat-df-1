import { createContext, ReactNode, useContext, useState} from 'react';

type T = any;

type TypeTaskContext = {
    tasks: TypeTasks[];
    setTasks: React.Dispatch<React.SetStateAction<Array<T>[]>>
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

  const [ tasks, setTasks ] = useState([{
    id: 1,
    title: 'dwjiu0wquqdfuwe9rfweufuerf',
    completed: false
}]);

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