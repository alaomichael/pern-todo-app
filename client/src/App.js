import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import LoadingTodos from "./components/LoadingTodos";

function App() {

  let todoList = ListTodos.filter < 1 ? <LoadingTodos /> : <ListTodos />;
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
          {todoList}

      </div>
    </Fragment>
  );
}

export default App;
