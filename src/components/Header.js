import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Title from "./Title";
const useStyles = makeStyles(() => ({
  btn: {
    marginRight: "10px",
    width: "130px",
    textTransform: "none",
    color: "#f0e68c",
    fontSize: "1rem",
  },
}));
function Header({ toggleForm, formState }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className="header">
      <Title />
      {location.pathname === "/" && (
        <Button
          variant="contained"
          className={classes.btn}
          onClick={toggleForm}
          style={{
            background: formState ? "#ffb74d" : "#283797",
            color: formState ? "#997700" : "#f0e68c",
          }}
        >
          {formState ? (
            <>
              <ArrowBackIcon />
              Back
            </>
          ) : (
            <>
              <AddCircleTwoToneIcon />
              Add Todo
            </>
          )}
        </Button>
      )}
    </div>
  );
}

export default Header;
