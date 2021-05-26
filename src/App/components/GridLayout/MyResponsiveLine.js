import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      colors={(d) => d.color}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        useUTC: false,
        precision: 'day',
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{ type: 'linear', stacked: false }}
      curve="natural"
      axisTop={null}
      axisRight={null}
      enableGridX={false}
      enableGridY={false}
      enableArea={false}
      areaBaselineValue={0}
      axisBottom={{
        orient: 'bottom',
        tickSize: 6,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'time',
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b',
        tickValues: 'every month',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 6,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'commits',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor="var(--color-white-regular)"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      legends={[]}
    />
  );
};

export default MyResponsiveLine;
