import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { useSelector } from 'react-redux';
import generateColors from '../utils/color';
import { getRegion, getRelevance } from '../utils/chart';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 7, 
      },
    },
  };

const AllChart = () => {

    const vizual = useSelector(state => state.allData.allData )
    const intt = vizual?.[0]?.filter(({country}) => !['', 'United States of America'].includes(country))

    let groupedRelevance = getRelevance(intt)
    let groupedRegion = getRegion(intt)
      
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
          {
            label: 'Region',
            data: groupedRegion?.map(item => item.count),
            backgroundColor: generateColors(36),
            borderColor: generateColors(36),
            borderWidth: 1,
          },
        ],
      }), [groupedRelevance, groupedRegion])
  return (
    <div className='w-[90%] mt-4 border border-[#dde] mb-10 p-3 ml-auto mr-auto'>
      <h1 className='text-[#717082] text-xl'>Relevance and Region Chart</h1>
      <Line data={intensityChart} options={options} />
    </div>
  )
}

export default AllChart;