import React from "react";
import styled from "@emotion/styled";
import DashboardCard from "./DashboardCard";
import { useSelector } from "react-redux";

export default function DashboardTotalUncompleted() {
  const totalUncompleted = useSelector(
    (state) => state.firebaseData.calcAllUncompletedTickets
  );
  const totalData = useSelector(
    (state) => state.firebaseData.totalTickets.total
  );
  const total =
    totalUncompleted.high + totalUncompleted.normal + totalUncompleted.low;
  const percent = Math.round((total / totalData) * 100);
  let data = [
    { name: "Total High", amount: totalUncompleted.high, percent: null },
    { name: "Total Normal", amount: totalUncompleted.normal, percent: null },
    { name: "Total Low", amount: totalUncompleted.low, percent: null },
    {
      name: "Total Uncompleted",
      amount: total,
      percent: percent ? `${percent}%` : null,
    },
  ];

  return (
    <Container>
      {data.map((card) => (
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
  margin: 54px 30px 0 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
