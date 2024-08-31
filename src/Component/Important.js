import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar, FaTrash } from 'react-icons/fa';
import './Important.css';

function Important() {
  const location = useLocation();
  const { list } = location.state || { list: [] }; 
  const importantTasks = list.filter(task => task.important);

  return (
    <div className="important-container">
      <h1>Important Tasks</h1>
      <ul>
        {importantTasks.length > 0 ? (
          importantTasks.map((todo) => (
            <li className="task" key={todo.id}>
              <div className="task-content">
                <span>{todo.todo}</span>
                <button className="important-btn">
                  <FaStar />
                </button>
              </div>
              <button className="delete-btn">
                <FaTrash />
              </button>
            </li>
          ))
        ) : (
          <p>No important tasks</p>
        )}
      </ul>
    </div>
  );
}

export default Important;
