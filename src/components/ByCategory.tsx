import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { categoryDiagramData } from '../data/filteredData'
import './bycategory.scss'

function ByCategory() {

  return (
    <div className='demo-chart'>
        <Pie data={categoryDiagramData} className='pie-chart'/>
    </div>
  )
}

export default ByCategory
