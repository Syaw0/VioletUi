import React, { useState } from "react";
import LoadingButton from "../lib/loadingButton";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "Loading Button" };

export const loadingButton = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <LoadingButton>Hello button</LoadingButton>
      <br />
      <LoadingButton startIcon={<FingerPrintIcon />}>
        Hello button
      </LoadingButton>
      <br />
      <LoadingButton endIcon={<FingerPrintIcon />}>Hello button</LoadingButton>
      <br />
      <LoadingButton variant="outlined" loading endIcon={<FingerPrintIcon />}>
        Hello button
      </LoadingButton>
      <br />{" "}
      <LoadingButton
        variant="shadow"
        color="secondary"
        loading
        endIcon={<FingerPrintIcon />}
      >
        Hello button
      </LoadingButton>
      <br />
      <div>
        <LoadingButton
          onClick={() => setLoad((s) => !s)}
          loading={load}
          startIcon={<FingerPrintIcon />}
          loaderText="Loading..."
          color="tertiary"
        >
          Submit
        </LoadingButton>
      </div>
    </>
  );
};
