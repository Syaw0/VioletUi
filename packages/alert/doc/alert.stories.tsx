import React from "react";
import { Alert } from "../lib/alert";

export default { title: "Alert" };

export const Warning = () => (
  <Alert title="Alert" type="warning">
    Some Text
  </Alert>
);
