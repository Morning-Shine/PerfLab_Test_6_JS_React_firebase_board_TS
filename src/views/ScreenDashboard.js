import React, { useEffect } from "react";
import ControlPanel from "../components/ControlPanel";
import SideBar, { drawerWidth } from "../components/SideBar";
import PageName from "../components/PageName";
import DashboardTotalUncompleted from "../components/DashboardTotalUncompleted";
import DashboardBarChart from "../components/DashboardBarChart";
import DashboardUserTotalUncompleted from "../components/DashboardUserTotalUncompleted";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  calcAllUncompletedTickets,
  calcUserUncompletedTickets,
  totalTickets,
} from "../async/fetchTickets";

export default function ScreenDashboard() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.id);

  useEffect(() => {
    dispatch(calcAllUncompletedTickets());
    dispatch(calcUserUncompletedTickets(user));
    dispatch(totalTickets(user));
  });

  return (
    <DivCont>
      <SideBar />
      <Div>
        <ControlPanel />
        <PageName name={"Dashboard"} />
        <DashboardTotalUncompleted />
        <DashboardBarChart />
        <DashboardUserTotalUncompleted />
      </Div>
    </DivCont>
  );
}

const DivCont = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${drawerWidth}px auto;
`;

const Div = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;
