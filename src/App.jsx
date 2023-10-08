import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container  mx-auto" >
        <TaskForm />
        <Tasks />
      </div>
    </main>
  );
};

export default App;
