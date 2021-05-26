import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import TooltipStyles from './TooltipStyles/TooltipStyles';
import { format } from 'date-fns';
import { GitCommit } from 'react-feather';
import TooltipTextStyles from './TooltipStyles/TooltipTextStyles';

const MyResponsiveLine = ({ data }) => {
  const toolTipDate = (weekDate) => format(weekDate, 'MMM dd, YYY');

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
      t
      tooltip={({ point }) => (
        <TooltipStyles>
          <TooltipTextStyles primary>
            Week of {toolTipDate(point.data.x)}
          </TooltipTextStyles>
          <TooltipTextStyles>
            <GitCommit size={20} /> {point.data.y} Commits
          </TooltipTextStyles>
        </TooltipStyles>
      )}
      enableCrosshair={false}
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
