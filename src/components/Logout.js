import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";


export default function Logout({ visibleLogout }) {
  const dispatch = useDispatch();
  const logout=()=>{
      dispatch(removeUser());
  }

  return (
    <GoAway hidden={visibleLogout} onClick={logout}>
      <p>выйти</p>
    </GoAway>
  );
}

const GoAway = styled.div`
font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  width: 80px;
  justify-self: end;
`;
