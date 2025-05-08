"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { useMediaQuery } from "react-responsive";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart";

const chartConfig = {
  pVal: {
    label: "Progress",
    color: "#2563eb",
  },
} satisfies ChartConfig;

type ChartDataType = {
  tropic: string;
  pVal: number;
}[];

const SkillCharts = ({ data }: { data: ChartDataType }) => {
  const isMobile = useMediaQuery({ maxWidth: "720px" });
  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="h-[720px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={data}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <XAxis
            type="number"
            dataKey="pVal"
            // hide
          />
          <YAxis
            dataKey="tropic"
            type="category"
            tickLine={false}
            tickMargin={-5}
            axisLine={false}
            // tickFormatter={(value) => value}
            hide
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="pVal"
            fill="var(--muted)"
            radius={5}
            className="border border-dashed"
            animationDuration={700}
            animationEasing="ease-out"
          >
            <LabelList
              dataKey="tropic"
              position="insideLeft"
              offset={40}
              className="fill-foreground"
              fontSize={isMobile ? 13 : 20}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default SkillCharts;
