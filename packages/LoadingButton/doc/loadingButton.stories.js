import React from "react";
import { LoadingButton } from "../lib/loadingButton";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "Loading Button" };

export const loadingButton = () => (
  <>
    <LoadingButton>Hello button</LoadingButton>

    <LoadingButton startIcon={<FingerPrintIcon />}>Hello button</LoadingButton>
    <LoadingButton endIcon={<FingerPrintIcon />}>Hello button</LoadingButton>
    <LoadingButton loading endIcon={<FingerPrintIcon />}>
      Hello button
    </LoadingButton>
  </>
);
