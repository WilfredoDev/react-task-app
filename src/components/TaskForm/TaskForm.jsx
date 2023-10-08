import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const {createTask, body, title, setTitle, setBody} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title:title,
      body:body
    });
    setBody('');
    setTitle('');
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 mb-4 p-10">
        <h1 className="text-2x1 font-bold text-white mb-3">Crear Tarea</h1>
        <input
          className="p-3 w-full mb-2 bg-slate-300"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="ingresa tu tarea"
          name="task"
          id="task"
          value={title}
          autoFocus
        />

        <input 
          className="p-3 w-full mb-2 bg-slate-300"
          onChange={(e) =>{
            setBody(e.target.value);
          }} 
          type="text" 
          name="body" 
          id="body" 
          placeholder="Ingresa una descripcion"
          value={body}
        />
        <button className="text-white bg-blue-600 p-3 rounded-lg hover:bg-blue-900 content-center">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
