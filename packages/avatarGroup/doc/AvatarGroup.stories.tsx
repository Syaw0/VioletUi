import React from "react";
import AvatarGroup from "../lib/avatarGroup";
import Avatar from "@violetui/avatar";

export default { title: "AvatarGroup" };

export const avatar = () => (
  <div>
    <div>
      <AvatarGroup>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </div>

    <div>
      <AvatarGroup max={5}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </div>
    <div>
      <AvatarGroup total={22}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </div>
  </div>
);
