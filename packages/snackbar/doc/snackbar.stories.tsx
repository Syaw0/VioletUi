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
      this is snackbar this is snackbar thi
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
    <Snackbar
      color="primary"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
    <Snackbar
      color="secondary"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
    <Snackbar
      color="tertiary"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
    <Snackbar
      color="error"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
    <Snackbar
      color="warning"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
    <Snackbar
      color="success"
      action={{
        name: "Action",
        onClick() {
          console.log("hello");
        },
      }}
      startIcon={<IconSuccess />}
      endIcon={{ icon: <IconClose /> }}
    >
      Operation was successful
    </Snackbar>

    <br />
  </>
);
