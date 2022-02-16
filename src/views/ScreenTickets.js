import SideBar, { drawerWidth } from "../components/SideBar";
import ControlPanel from "../components/ControlPanel";
import PageName from "../components/PageName";
import styled from "@emotion/styled";
import TicketsTable from "../components/TicketsTable";

export default function ScreenTickets() {
  return (
    <DivCont>
      <SideBar />
      <Div>
        <ControlPanel />
        <PageName name={"Tickets"} />
        <TicketsTable />
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
