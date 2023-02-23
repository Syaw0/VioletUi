import React from "react";
import { Alert } from "../lib/alert";

export default { title: "Alert" };

export const Warning = () => (
  <Alert title="Alert" type="warning">
    Some Text
  </Alert>
);

export const Warning2 = () => (
  <Alert title="Alert" type="warning">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);
