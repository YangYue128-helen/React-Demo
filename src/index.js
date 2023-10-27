import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './components/todoList/TodoList';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import OpeniiotBox from './components/OpeniiotBox';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <OpeniiotBox/>
    <TodoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
