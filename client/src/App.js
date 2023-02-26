import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { ToastContainer } from 'react-toastify';
import { AllTodos } from './components/AllTodos';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm/>
        <AllTodos/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
