import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

export default function DashboardCard({ name, amount, percent }) {
  return (
    <StyledCard>
      <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Div>
        <StyledTypography variant="h4" component="div">
          {amount}
        </StyledTypography>
        {percent ? (
          <Typography variant="h6" component="div">
            {percent}
          </Typography>
        ) : null}
      </Div>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  border: 1px solid #dfe0eb;
  box-shadow: none;
  border-radius: 8px;
  height: 100%;
  width: 23%;
  text-align: center;
  padding-top: 24px;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0 25%;
`;