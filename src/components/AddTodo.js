import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { nanoid } from "nanoid";
const useStyles = makeStyles(() => ({
  formDiv: {
    padding: "10px 6px 15px 6px",
    backgroundColor: "#0080ff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: "10px 0",
    color: "black",
    width: "100%",
  },
  input: {
    color: "black",
    fontWeight: "600",
  },
  day: {
    margin: "10px 0",
    color: "black",
    width: "100%",
  },
  cb: {
    marginRight: "5px",
    width: "100%",
  },
}));

function AddTodo({ onAdd }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [st, setStrike] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Todo cannot be empty");
      return;
    }
    var id = nanoid();
    onAdd({ id, text, day, st});
    setText("");
    setDay("");
    setStrike(false);
  };
  return (
    <div className={classes.formDiv}>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          className={classes.text}
          placeholder="Todo"
          value={text}
          InputProps={{
            className: classes.input,
          }}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          variant="outlined"
          className={classes.day}
          placeholder="Jun 13th at 12:00pm"
          value={day}
          InputProps={{
            className: classes.input,
          }}
          onChange={(e) => setDay(e.target.value)}
        />
        <input className="btn" type="submit" value="Save Todo" />
      </form>
    </div>
  );
}

export default AddTodo;
