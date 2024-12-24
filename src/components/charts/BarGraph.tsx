import React, { useMemo } from 'react'
import BarItem from './BarItem';
import './BarGraph.css'

export type Props = {
  dataArray: Array<{ value: number, legend: string  }>;
};

const BarGraph = ({ dataArray }: Props) => {
  const barItems = useMemo(() => {
  let highestValue = 0;

  dataArray.forEach(({value}) => {
    highestValue = Math.max(highestValue, value);
  });

  return dataArray.map((item) => ({
    legend: item.legend,
    barPercentage: `${(item.value / highestValue) * 100}%`
  }));

  }, [dataArray])
  return (
    <div className='bar-graph'>
      <div className='bars-list'>
        {
          barItems.map((barItem: { legend: string; barPercentage: string }, idx: number) => (
            <BarItem key={idx} legend={barItem.legend} barPercentage={barItem.barPercentage} />
          ))
        }
        
      </div>
      <div className='bars-line' />
    </div>
  )
}

export default BarGraph