import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todos from './components/Todos';
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {
    
    let sno;

    console.log("Addin todo");
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo])
    console.log(mytodo)
    // localStorage.setItem("todos", JSON.stringify(todos));

  }
  const onDelete = (todo) => {
    console.log("I am delete");

    setTodos(todos.filter((e) => {
      return e !== todo;

    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <div>
      <Header title="My Todos-List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
