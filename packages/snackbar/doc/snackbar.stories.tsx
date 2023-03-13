import React from "react";
import Snackbar from "../lib/snackbar";
import IconSuccess from "./icons/successIcon";
import IconClose from "./icons/closeIcon";
export default { title: "Snackbar" };

export const Snack = () => (
  <>
    <Snackbar
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      this is snackbar this is snackbar this is snackbar this snackbar
    </Snackbar>

    <br />

    <Snackbar
      action={{
        name: "Undo",
        onClick() {
          console.log("hello");
        },
      }}
    >
      Operation was successful
    </Snackbar>

    <br />
  </>
);
