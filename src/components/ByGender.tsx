import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { genderDiagramData } from '../data/filteredData'

function ByGender() {
    
  return (
    <div className='demo-chart'>
        <Pie data={genderDiagramData} className='pie-chart'/>
    </div>
  )
}

export default ByGender
