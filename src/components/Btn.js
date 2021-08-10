import React from "react";
import Button from "@material-ui/core/button";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
function Btn({ placeHolder, color }) {
  return (
    <Button
      style={{
        fontSize: "1.25rem",
        padding: "0.25rem 1.25rem",
        margin: "5px",
        color: color,
        fontWeight: "600",
        textTransform: "none",
      }}
      variant="contained"
      color="primary"
    >
      <AddCircleTwoToneIcon />
      {placeHolder}
    </Button>
  );
}

export default Btn;
