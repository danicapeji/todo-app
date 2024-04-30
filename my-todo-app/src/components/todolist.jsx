import { useState } from "react";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newToDo]);

    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h4>
        Skriv in nya uppgifter i vår snabba och
        <br />
        intuitiva gränssnitt och se dem omedelbart läggas till i din lista.
      </h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <div className="todos">
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
export default TodoList;
