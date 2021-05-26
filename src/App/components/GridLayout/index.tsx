import React, { useEffect, useState } from 'react';
import { format, fromUnixTime } from 'date-fns';
import { Selection } from '../..';
import defaultData from './data';
import MyResponsiveLine from './Grid/MyResponsiveLine';
import GridLayoutStyles from './GridLayoutStyles';

interface GridDataProps {
  id: string;
  color: string;
  data: Array<{ x: string; y: number }> | undefined;
}

interface GridLayoutProps {
  selection: Array<Selection>;
}

const GridLayout = ({ selection }: GridLayoutProps): JSX.Element => {
  const [repoStats, setRepoStats] = useState<Array<GridDataProps>>([]);

  const graphDataFormat = (): void => {
    const updatedDataKeys: Array<GridDataProps> = selection.map((item) => {
      return {
        id: item.nameWithOwner,
        color: item.color,
        data: item?.commits?.map((value) => {
          const weekOf = fromUnixTime(value.week);

          return {
            x: format(weekOf, 'yyyy-MM-dd'),
            y: value.total,
          };
        }),
      };
    });

    setRepoStats(updatedDataKeys);
  };

  useEffect(() => {
    graphDataFormat();
  }, [selection]);

  return (
    <GridLayoutStyles>
      <MyResponsiveLine data={repoStats.length === 0 ? defaultData : repoStats} />
    </GridLayoutStyles>
  );
};

export default GridLayout;
