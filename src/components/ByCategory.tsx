import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

import { categoryDiagramData } from '../data/filteredData'
import './bycategory.scss'

function ByCategory() {

  return (
    
    <>
    <section className='view-header'>
      <h1>Winners by Category</h1>
    </section>
    
    <div className='demo-chart'>
        <Pie data={categoryDiagramData} className='pie-chart'/>
    </div>
    
    </>
    
  )
}

export default ByCategory
