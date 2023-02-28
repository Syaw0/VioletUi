import React from "react";
import Alert from "../lib/alert";

export default { title: "Alert" };

export const Warning1 = () => (
  <Alert
    title="Alert"
    type="warning"
    onClose={(e) => {
      console.log("hello friend!");
    }}
  >
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Warning2 = () => (
  <Alert title="Alert" type="warning">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Warning3 = () => (
  <Alert title="Alert" variant="outlined" type="warning">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Warning4 = () => (
  <Alert variant="filled" type="warning">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Success = () => (
  <Alert variant="filled" type="success">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Success2 = () => (
  <Alert variant="default" title="Success!" type="success">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Success3 = () => (
  <Alert variant="outlined" type="success">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Success4 = () => (
  <Alert variant="outlined" type="success" onClose={() => console.log("hello")}>
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Error = () => (
  <Alert variant="filled" type="error">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Error2 = () => (
  <Alert variant="default" title="Error!" type="error">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Error3 = () => (
  <Alert variant="outlined" type="error">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Error4 = () => (
  <Alert variant="outlined" type="error" onClose={() => console.log("hello")}>
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Info = () => (
  <Alert variant="filled" type="info">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Info2 = () => (
  <Alert variant="default" title="Info!" type="info">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Info4 = () => (
  <Alert variant="outlined" type="info" title="Information!">
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);

export const Info3 = () => (
  <Alert
    variant="outlined"
    type="info"
    title="Information!"
    onClose={() => console.log("hello")}
  >
    You are disabling Cookies that mean may cause functionality problem!
  </Alert>
);
