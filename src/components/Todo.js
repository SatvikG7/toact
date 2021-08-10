import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(() => ({
  
  cursor: {
    cursor: "pointer",
  },
  border: {
    boxShadow: "0 0 0 2px green, 0 0 0 3.5px cyan",
  },
  todo: {
    display: "flex",
    flexDirection:"column",
    margin: "0",
  },
  text: {
    display: "inline",
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  day: {
    display: "inline",
    fontSize: "1rem",
    color: "#525252",
  },
  td: {
    borderRadius: "10px",
    backgroundColor: "cyan",
    marginBottom: "7px",
  },
}));

export default function Todo({ todo, onDelete, onToggle }) {
  const classes = useStyles();

  return (
    <ListItem
      className={[todo.imp ? classes.border : null, classes.td].join(" ")}
      onDoubleClick={() => onToggle(todo.id)}
    >
      <ListItemText
        className={classes.todo}
        primary={<Typography className={classes.text}>{todo.text}</Typography>}
        secondary={<Typography className={classes.day}>{todo.day}</Typography>}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          color="secondary"
          aria-label="delete"
          className={classes.cursor}
          onClick={() => onDelete(todo)}
        >
          <DeleteForeverTwoToneIcon style={{ fontSize: "2.5rem" }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
