import React from "react";
import styled from "@emotion/styled";
import DashboardCard from "./DashboardCard";
import { useSelector } from "react-redux";

export default function DashboardUserTotalUncompleted() {
  const totalUserDataUncompleted = useSelector(
    state => state.firebaseData.calcUserUncompletedTickets
  );

  const totalUserData = useSelector(
    state => state.firebaseData.totalTickets.totalThisUser
  );

  const total =
    totalUserDataUncompleted.high +
    totalUserDataUncompleted.normal +
    totalUserDataUncompleted.low;

  const percent = Math.round((total / totalUserData) * 100);

  const data = [
    { name: "High", amount: totalUserDataUncompleted.high, percent: null },
    { name: "Normal", amount: totalUserDataUncompleted.normal, percent: null },
    { name: "Low", amount: totalUserDataUncompleted.low, percent: null },
    {
      name: "Uncompleted",
      amount: total,
      percent: percent ? `${percent}%` : null,
    },
  ];
  return (
    <Container>
      {data.map(card => (
        <DashboardCard
          key={card.name}
          name={card.name}
          amount={card.amount}
          percent={card.percent}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 134px;
  margin: 0px 30px 0 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
