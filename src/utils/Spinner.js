import React from "react";

import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 40px auto;
  border-color: red;
`;

const Spinner = () => {
  return <PuffLoader css={override} size={150} color={"#123abc"} />;
};

export default Spinner;
