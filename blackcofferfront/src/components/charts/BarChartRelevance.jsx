import React, { useMemo, useState } from 'react'
import { Bar,Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { useSelector } from 'react-redux';
import generateColors from '../utils/color';
import { getRelevance } from '../utils/chart';
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

const BarChartRelevance = () => {

    const vizual = useSelector(state => state.allData.allData )
    const intt = vizual?.[0]?.filter(({country}) => !['', 'United States of America'].includes(country))
    const groupedRelevance= getRelevance(intt)
 
    const intensityChart = useMemo(()=> ({
        labels: groupedRelevance?.map(item => item.country),
        datasets: [
          {
            label: 'Relevance',
            data: groupedRelevance?.map(item => item.relevance),
            backgroundColor: generateColors(36),
            borderColor: generateColors(36),
            borderWidth: 1,
          },
        ],
      }), [groupedRelevance])
  return (
    <div className='w-[90%] mt-4 border border-[#dde] mb-10 p-3 ml-auto mr-auto'>
      <h1 className='text-[#717082] text-xl'>Relevance Chart</h1>
      <Line data={intensityChart} options={options} />
    </div>
  )
}

export default BarChartRelevance