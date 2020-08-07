import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItemText, ListItem, Button, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h2>Modal</h2>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy Deadline ⏰"
          />
        </ListItem>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => db.collection("todos").doc(props.todo.id).delete()}
        >
          Delete ❌
        </Button>
      </List>
    </>
  );
}

export default Todo;
