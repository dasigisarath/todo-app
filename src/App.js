import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

import "./App.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setTodos(
          snapShot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h2>Hello Lets Go 🚀</h2>
      <form>
        <FormControl>
          <InputLabel>✔ Write a Todo</InputLabel>
          <Input
            placeholder="write a todo..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          {" "}
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
