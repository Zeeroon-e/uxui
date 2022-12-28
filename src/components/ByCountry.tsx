import Chart from 'chart.js/auto'
import { Pie, Line, Bar } from 'react-chartjs-2'
import { countryDiagramData} from '../data/filteredData'

function ByCountry() {
  return (
    <>
      <section className='view-header'>
        <h1>Winners by Country</h1>
      </section>
      
      <div className='demo-chart'>
        <Bar data={countryDiagramData} />
      </div>
      
    </>
  )
}

export default ByCountry
