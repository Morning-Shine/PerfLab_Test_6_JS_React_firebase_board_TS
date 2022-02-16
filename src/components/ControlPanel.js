import React from "react";
import ToggleChangeTheme from "./ToggleChangeTheme";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import styled from "@emotion/styled";


export default function ControlPanel() {
  const userData = useSelector(state => state.user);
  
  let render;
  userData.id
    ? (render = (
        <>
          <ToggleChangeTheme />
          <UserInfo user={userData} />
        </>
      ))
    : (render = <ToggleChangeTheme />);

  return <Div>{render}</Div>;
}

const Div = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  padding-right: 33px;
  padding-top: 30px;
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 100px 1fr;
  text-align: end;
`;