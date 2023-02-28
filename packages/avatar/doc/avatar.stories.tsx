import React from "react";
import Avatar from "../lib/avatar";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "Avatar" };

export const avatar = () => (
  <div>
    <Avatar
      alt="img"
      src="https://user-images.githubusercontent.com/90524474/218326887-539649b7-a556-4214-a5a3-3d4e7e541bd2.jpg?w=128&q=50"
      size="large"
    ></Avatar>
    <Avatar alt="img" size="medium"></Avatar>
    <Avatar alt="img" size="medium">
      SS
    </Avatar>
    <Avatar alt="img" size="small">
      SS
    </Avatar>
    <Avatar alt="img" size="large" style={{ backgroundColor: "purple" }}>
      SS
    </Avatar>
    <Avatar alt="img" size="large">
      <FingerPrintIcon />
    </Avatar>
    <Avatar alt="img" variant="square" size="large">
      <FingerPrintIcon />
    </Avatar>
    <Avatar
      alt="img"
      variant="round"
      src="https://user-images.githubusercontent.com/90524474/218326887-539649b7-a556-4214-a5a3-3d4e7e541bd2.jpg?w=128&q=50"
      size="large"
    ></Avatar>
    <Avatar alt="img" variant="round" src="sdf" size="medium"></Avatar>
  </div>
);
