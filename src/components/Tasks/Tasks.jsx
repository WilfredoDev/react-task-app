import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const Tasks = () => {
  const { tareas, deleteTask } = useContext(TaskContext);
  if (tareas.length == 0) {
    return (
          <h1 className="text-4xl font-bold text-white px-2 text-center mt-4">
            No hay tareas aun
          </h1>
    );
  }
  return (
    <ul className="grid grid-cols-4 gap-4 p-2 items-center">
      {tareas.map((tarea) => (
        <li key={tarea.id} className="bg-gray-900 text-white p-4 ">
          <h1 className="text-xl font-bold capitalize px-2">{tarea.title}</h1>
          <p className="text-sm text-gray-500 px-2">{tarea.body}</p>
          <button
            className="bg-red-500  hover:bg-red-900 rounded-lg px-2 py-1 mt-4 "
            onClick={() => deleteTask(tarea.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
