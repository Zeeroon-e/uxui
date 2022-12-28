import Chart from 'chart.js/auto'
import { Pie, Line, Bar } from 'react-chartjs-2'
import { AveragePrizeDiagramData } from '../data/filteredData'

function AveragePrizeByYear() {
  return (
  <>
  <section className='view-header'>
    <h1>Average price sums per year</h1>
  </section>
  
    <div className='demo-chart'>
        
      <Line data={ AveragePrizeDiagramData } />
    </div>
    </>
  )
}

export default AveragePrizeByYear