import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaPlus, FaTrash, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Home.css';

function Home({ list, setList }) {
  const [date, setDate] = useState("");
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(date.toLocaleDateString('en-US', options));
  }, []);

  const location = useLocation();
  const { username } = location.state || { username: "User" };

  const handleAddTodo = () => {
    const newTask = {
      id: Math.random(),
      todo: inputTask,
      important: false,
    };
    setList([...list, newTask]);
    setInputTask('');
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleImportant = (id) => {
    const newList = list.map((todo) => 
      todo.id === id ? { ...todo, important: !todo.important } : todo
    );
    setList(newList);
  };

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <div className='date'>
          <h1>{date}</h1>
          <h1 id='heading'>Welcome, {username}</h1>
        </div>
       
        <section className="task-section">
          <div className="Top">
            <div className="input-wrapper">
              <input className="input-box-todo" type="text" value={inputTask}
                onChange={handleInputChange} placeholder="Enter a task" id='Task' />
              <button className="add-btn" onClick={handleAddTodo}>
                <FaPlus />
              </button>
            </div>
            <ul>
              {list.map((todo) => (
                <li className="task" key={todo.id}>
                  <div className="task-content">
                    <span>{todo.todo}</span>
                    <button className="important-btn" onClick={() => handleImportant(todo.id)}>
                      {todo.important ? <FaStar /> : <FaStarHalfAlt />}
                    </button>
                  </div>
                  <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
