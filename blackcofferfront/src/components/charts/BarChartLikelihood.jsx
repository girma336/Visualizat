import React, { useMemo, useState } from 'react'
import { Bar,Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { useSelector } from 'react-redux';
import generateColors from '../utils/color';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    scales: {
      y: {
        suggestedMin: 0, // Set the minimum value of the y-axis
        suggestedMax: 6, // Set the maximum value of the y-axis
      },
    },
  };

const BarChartLikeliood = () => {
    const vizual = useSelector(state => state.allData.allData )
    const intt = vizual?.[0]?.filter(({country}) => ![''].includes(country));
    const intensityChart = useMemo(()=> ({
        labels:  intt?.map(({country}) => country),
        datasets: [
          {
            label: 'Likelihood',
            data: vizual?.[0]?.map(({likelihood}) => likelihood),
            backgroundColor: generateColors(106),
          },
        ],
      }), [vizual, intt])
  return (
    <div className='w-[90%] mt-4 border border-[#dde] mb-10 p-3 ml-auto mr-auto'>
      <h1 className='text-[#717082] text-xl'>Likelihood Chart</h1>
      <Bar data={intensityChart} options={options} />
      
    </div>
  )
}

export default BarChartLikeliood