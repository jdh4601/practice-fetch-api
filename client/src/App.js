import React, { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState(null);
  // fetch api -> client
  // 첫 렌더링할 때 1번만 실행되게 해야함
  useEffect(() => {
    fetch('http://localhost:4000/api/todo', {
      method: 'POST',
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        setTodoList(data);
      });
  }, []);

  return (
    <div>
      <h1>To do list</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            <div>{todo.id}</div>
            <div>{todo.content}</div>
            <div>{todo.done ? 'Y' : 'N'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
