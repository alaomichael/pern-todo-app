import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import LoadingTodos from "./components/LoadingTodos";

function App() {
  console.log(ListTodos.length);

  // let TodoList = ListTodos.length > 0 ? ListTodos : LoadingTodos;
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
