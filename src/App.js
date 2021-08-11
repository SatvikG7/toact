import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import About from "./components/About";

// *** Version ***
const version = "2.0.2";


function App() {
  let initialTodos;
  if (!localStorage.getItem("list")) {
    localStorage.setItem(
      "list",
      JSON.stringify([
        {
          id: 1,
          text: "Task 1",
          day: "Jun 13th at 12:00pm",
          st: true,
        },
        {
          id: 2,
          text: "Task 2",
          day: "Jun 13th at 12:00pm",
          st: false,
        },
        {
          id: 3,
          text: "Task 3",
          day: "Jun 13th at 12:00pm",
          st: true,
        },
      ])
    );
    initialTodos = JSON.parse(localStorage.getItem("list"));
  } else {
    initialTodos = JSON.parse(localStorage.getItem("list"));
  }

  const [todos, setTodos] = useState(initialTodos);
  const [showAddTodoForm, toggleAddTodoForm] = useState(false);
  let initFooterStateIsAbout;

  if (window.location.pathname === "/") {
    initFooterStateIsAbout = true;
  } else {
    initFooterStateIsAbout = false;
  }
  const [showAbout, toggleAbout] = useState(initFooterStateIsAbout);

  // @Similar to onload()
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  // @Add Todo
  const addTodo = (todo) => {
    var tds = JSON.parse(localStorage.getItem("list"));
    var tdlength = tds.length;
    tds[tdlength] = todo;
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(JSON.parse(localStorage.getItem("list")));
  };

  // @Delete Todo
  const deleteTodo = (todo) => {
    var tds = JSON.parse(localStorage.getItem("list"));

    tds = tds.filter(function (td) {
      if (td.id === todo.id) {
        return false;
      } else if (td.id !== todo.id) {
        return true;
      }
      return false;
    });
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(JSON.parse(localStorage.getItem("list")));
  };

  //@Toggle importance
  const onToggle = (id) => {
    var tds = JSON.parse(localStorage.getItem("list"));
    tds.forEach((todo, index) => {
      if (todo.id === id) {
        tds[index].st = !tds[index].st;
      }
    });
    localStorage.setItem("list", JSON.stringify(tds));
    setTodos(tds);
  };

  // @Toggle AddTodoForm
  const toggleForm = () => {
    toggleAddTodoForm(!showAddTodoForm);
  };

  return (
    <Router>
      <div className="container">
        <Header
          toggleForm={toggleForm}
          formState={showAddTodoForm}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <div className="div">
              {showAddTodoForm && <AddTodo onAdd={addTodo} />}
              {todos && (
                <Todos
                  todos={todos}
                  onDelete={deleteTodo}
                  onToggle={onToggle}
                />
              )}
            </div>
          )}
        />
        <Route path="/about" render={() => <About version={version} />} />
        <Footer showAbout={showAbout} toggleAbout={toggleAbout} />
      </div>
    </Router>
  );
}

export default App;
