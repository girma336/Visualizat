import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { useSelector } from 'react-redux';
import generateColors from '../utils/color';
import { getRegion } from '../utils/chart';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    scales: {
      y: {
        suggestedMin: 0, // Set the minimum value of the y-axis
        suggestedMax: 7, // Set the maximum value of the y-axis
      },
    },
  };

const BarChartRegion = () => {

    const vizual = useSelector(state => state.allData.allData )
    const intt = vizual?.[0]?.filter(({region}) => ![''].includes(region))
    const groupedRegion = getRegion(intt); 
      
    const intensityChart = useMemo(()=> ({
        labels: groupedRegion?.map(({region}) => region),
        datasets: [
          {
            label: 'Region',
            data: groupedRegion?.map(item => item.count),
            backgroundColor: generateColors(36),
          },
        ],
      }), [groupedRegion])
  return (
    <div className='w-[90%] mt-4 border border-[#dde] mb-10 p-3 ml-auto mr-auto'>
      <h1 className='text-[#717082] text-xl'>Region Chart</h1>
      <Bar data={intensityChart} options={options} />
    </div>
  )
}

export default BarChartRegion;