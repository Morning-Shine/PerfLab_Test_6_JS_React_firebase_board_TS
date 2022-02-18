import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/redux";
import { removeUser } from "../store/userSlice";


type Props = {
  visibleLogout: boolean;
}

export default function Logout({ visibleLogout }: Props) {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
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
