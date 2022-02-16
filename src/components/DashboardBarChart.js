import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { ResponsiveBar } from "@nivo/bar";

const testData = [
  {
    date: "3 feb",
    high: 2,
    normal: 5,
    low: 3,
  },
  {
    date: "2 feb",
    high: 3,
    normal: 4,
    low: 1,
  },
  {
    date: "1 feb",
    high: 1,
    normal: null,
    low: 5,
  },
  {
    date: "31 jan",
    high: 2,
    normal: 4,
    low: 2,
  },
  {
    date: "30 jan",
    high: 1,
    normal: 1,
    low: 5,
  },
  {
    date: "29 jan",
    high: 4,
    normal: null,
    low: 2,
  },
  {
    date: "28 jan",
    high: 1,
    normal: 6,
    low: 1,
  },
  {
    date: "27 jan",
    high: 3,
    normal: 1,
    low: 4,
  },
  {
    date: "26 jan",
    high: 5,
    normal: 4,
    low: 2,
  },
  {
    date: "25 jan",
    high: 3,
    normal: 3,
    low: 3,
  },
  {
    date: "24 jan",
    high: 6,
    normal: 4,
    low: 2,
  },
  {
    date: "23 jan",
    high: 1,
    normal: null,
    low: 5,
  },
  {
    date: "22 jan",
    high: 5,
    normal: 3,
    low: null,
  },
  {
    date: "21 jan",
    high: 6,
    normal: 2,
    low: 1,
  },
];

const keys = ["high", "normal", "low"];

const barTheme = {
  axis: {
    ticks: {
      line: {
        stroke: "none",
      },
    },
  },
  legends: {
    text: {
      fontSize: 14,
    },
  },
};

export default function DashboardBarChart() {
  return (
    <Div>
      <P>Completed Trends</P>
      <StyledTypography variant="subtitle1">
        указать дату и время обновления
      </StyledTypography>
      <ResponsiveBar
        enableGridY={false}
        theme={barTheme}
        padding={0.7}
        borderRadius={2}
        data={testData}
        indexBy={"date"}
        margin={{ top: 100, right: 0, bottom: 150, left: 77 }}
        keys={keys}
        colors={["#eb6e6e", "#50c786", "#f2cf42"]}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-left",
            direction: "row",
            itemDirection: "left-to-right",
            itemsSpacing: 2,
            itemWidth: 100,
            symbolSize: 20,
            itemsSpacing: 145,
            itemHeight: 410,
            translateY: -30,
            translateX: -25,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Div>
  );
}

const Div = styled.div`
  max-height: calc(100vh - 420px);
  min-height: calc(100vh - 600px);
  height: 55vh;
  max-width: calc(100vw - 318px);
  margin: 0px 30px 0 33px;
  @media (max-width: 1280px) {
    //TODO сделать уменьшаемый сайд бар
    max-width: calc(100vw - 139px);
  }
`;
const P = styled.p`
  font-weight: bold;
  font-size: 19px;
  padding-left: 32px;
  padding-top: 32px;
`;
const StyledTypography = styled(Typography)`
  font-size: 12px;
  color: #9fa2b4;
  padding-top: 8px;
  padding-left: 32px;
`;
