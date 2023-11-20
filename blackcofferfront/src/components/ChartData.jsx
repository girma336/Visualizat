import React from 'react'
import { DoughuntChat } from './charts/DoughuntChat'
import BarChartIntencity from './charts/BarChartIntencity'
import BarChartLikeliood from './charts/BarChartLikelihood'
import BarChartRelevance from './charts/BarChartRelevance'
import BarChartTopic from './charts/BarChartTopic'
import BarChartRegion from './charts/BarChartRegion'


const ChartData = () => {
  return (
    <div>
        <BarChartTopic />
        <BarChartRegion />
        <DoughuntChat />
        <BarChartIntencity />
        <BarChartLikeliood />
        <BarChartRelevance />
    </div>
  )
}

export default ChartData