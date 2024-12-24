import React from 'react'
import './BarItem.css'

export type Props = { legend: string; barPercentage: string }

const BarItem = ({ legend }: Props) => {
  return (
    <div className='bar-item'>
      <div className='bar-item-legend'>{legend}</div>
    </div>
  )
}

export default BarItem