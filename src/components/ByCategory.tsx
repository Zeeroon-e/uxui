import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { categoryDiagramData } from '../data/categoryData'
import './bycategory.scss'

function ByCategory() {

  console.log(categoryDiagramData);
  
  
  return (
    <div className='demo-chart'>
        <Pie data={categoryDiagramData} className='pie-chart'/>
    </div>
  )
}

export default ByCategory