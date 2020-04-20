import React from 'react';

type TodoListProps = {
  todos: any[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className='todo'>
            <label>
              <input type='checkbox' />
              <span>{todo}</span>
              <i className='material-icons red-text'>Delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
