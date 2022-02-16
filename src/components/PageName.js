import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";


export default function PageName({ name }) {
  return (
    <Div>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "0.3",
        }}
      >
        {name}
      </Typography>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 36px;
  margin-left: 30px;
  width: 300px;
`;
