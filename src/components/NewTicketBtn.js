import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


export default function NewTicketBtn() {
  return (
    <StyledLink to={`/tickets/new`}>
      <StyledButton variant="contained">New Ticket</StyledButton>
    </StyledLink>
  );
}

const StyledButton = styled(Button)`
  text-transform: none;
  height: 40px;
  width: 117px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  position: absolute;
  top: 27px;
  left: 146px;
`;

const StyledLink = styled(Link)`
  grid-row-start: 1;
  grid-row-end: 2;
`;
