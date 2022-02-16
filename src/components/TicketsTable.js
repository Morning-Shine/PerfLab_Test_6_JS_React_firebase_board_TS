import React, { useState } from "react";
import styled from "@emotion/styled";
import NewTicketBtn from "./NewTicketBtn";
import TableWrapper from "./TableWrapper";
import TableView from "./TableView";

export default function TicketsTable() {
  const [view, setView] = useState("list"); //tile

  return (
    <DivCont>
      <DivTitle>
        <P>All tickets</P>
        <NewTicketBtn />
        <TableView />
      </DivTitle>
      <TableWrapper />
    </DivCont>
  );
}

const DivCont = styled.div`
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
  height: calc(100vh - 158px);
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr;
  margin: 44px 33px 30px 30px;
`;

const DivTitle = styled.div`
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const P = styled.p`
  position: absolute;
  left: 32px;

  top: 32px;
  font-weight: bold;
  font-size: 19px;
`;
