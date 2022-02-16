import React, { useState } from "react";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Logout from "./Logout";

export default function UserInfo({ user }) {
  const [visibleLogout, setVisibleLogout] = useState(true);
  return (
    <Div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <P>
        {user.name}
        {/* очень длинное-предлинное имя, прямо нереально длиннючее вот вообще */}
      </P>
      <AvatarContainer onClick={() => setVisibleLogout(!visibleLogout)}>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: 40, height: 40 }}
        />
      </AvatarContainer>
      <Logout visibleLogout={visibleLogout} />
    </Div>
  );
}

const AvatarContainer = styled.div`
  position: relative;
  right: 0;
  border: 1.5px solid #dfe0eb;
  border-radius: 50%;
  padding: 2.5px;
  justify-self: end;
  cursor: pointer;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  text-align: end;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 2px auto 45px;
  align-items: center;
  justify-content: space-between;
`;
