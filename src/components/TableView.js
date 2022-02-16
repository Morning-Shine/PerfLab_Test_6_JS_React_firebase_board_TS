import React, { useState } from "react";
import styled from "@emotion/styled";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../store/tableViewSlice";

export default function TableView() {
  const [disabledBtns, setDisabledBtns] = useState({
    btnTile: false,
    btnTable: true,
  });

  const dispatch = useDispatch();
  const viewState = useSelector(state => state.tableView.currentView);

  const setViewTile = () => {
    dispatch(
      setView({
        view: "tile",
      })
    );
    setDisabledBtns({ btnTile: true, btnTable: false });
  };

  const setViewTable = () => {
    dispatch(
      setView({
        view: "table",
      })
    );
    setDisabledBtns({ btnTile: false, btnTable: true });
  };

  return (
    <Div>
      <P>View:</P>
      <Button onClick={setViewTile} disabled={disabledBtns.btnTile}>
        {viewState == "tile" ? (
          <StyledGridViewIcon />
        ) : (
          <GridViewIcon color="disabled" />
        )}
      </Button>
      <Button onClick={setViewTable} disabled={disabledBtns.btnTable}>
        {viewState == "table" ? (
          <StyledTableRowsIcon />
        ) : (
          <TableRowsIcon color="disabled" />
        )}
      </Button>
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  align-content: center;
  width: 150px;
  padding-right: 32px;
  justify-content: space-evenly;
`;

const P = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:disabled {
      cursor: auto;
  }
`;

const StyledGridViewIcon = styled(GridViewIcon)`
  color: #50c786;
`;

const StyledTableRowsIcon = styled(TableRowsIcon)`
  color: #50c786;
`;
