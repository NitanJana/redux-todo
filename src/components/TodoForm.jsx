import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleTodoSubmit} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full rounded-l-lg border border-black/10 bg-white/20 px-3 py-1.5 outline-none duration-150"
      />
      <button type="submit" className="shrink-0 rounded-r-lg bg-green-600 px-3 py-1 text-white">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
