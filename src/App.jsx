import { useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="min-h-screen bg-[#172842] py-8">
      <div className="mx-auto w-full max-w-2xl rounded-lg px-4 py-3 text-white shadow-md">
        <h1 className="mb-8 mt-2 text-center text-2xl font-bold">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
