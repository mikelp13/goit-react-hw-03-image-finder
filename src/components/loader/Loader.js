import React from "react";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => {
  return <SyncLoader color="#cc283d"  loading="true" css={override} size={15} />;
};

export default Loader;
