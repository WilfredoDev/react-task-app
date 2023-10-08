import { createContext, useEffect, useState } from "react";
import { TaskList } from "../components/Tasks/TaskList";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tareas, setTareas] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    setTareas(TaskList);
  }, []);

  function createTask({ title, body }) {
    setTareas([
      ...tareas,
      {
        title: title,
        id: (tareas.length - 1)+2,
        body: body,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTareas(tareas.filter((tarea) => tarea.id !== taskID));
  }


  return (
    <TaskContext.Provider
      value={{
        tareas,
        createTask,
        deleteTask,
        setTitle,
        setBody,
        body,
        title
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
