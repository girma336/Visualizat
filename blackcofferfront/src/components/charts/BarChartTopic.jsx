import React, { useMemo, useState } from 'react'
import { Bar,Line,PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { useSelector } from 'react-redux';
import generateColors from '../utils/color';
import { getTopic } from '../utils/chart';
// import faker from 'faker';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 7, 
      },
    },
  };

const BarChartTopic = () => {

    const vizual = useSelector(state => state.allData.allData )
    const intt = vizual?.[0]?.filter(({topic}) => !['', 'oil'].includes(topic))
    let groupedTopic = getTopic(intt)
      
    const intensityChart = useMemo(()=> ({
        labels: groupedTopic?.map(item => item.topic),
        datasets: [
          {
            label: 'Topic',
            data: groupedTopic?.map(item => item.count),
            backgroundColor: generateColors(36),
            borderColor: generateColors(36),
            borderWidth: 1,
          },
        ],
      }), [groupedTopic])
  return (
    <div className='w-[90%] mt-4 border border-[#dde] mb-10 p-3 ml-auto mr-auto'>
      <h1 className='text-[#717082] text-xl'>Topic Chart</h1>
      <Line data={intensityChart} options={options} />
    </div>
  )
}

export default BarChartTopic