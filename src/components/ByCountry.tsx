import Chart from 'chart.js/auto'
import { Pie, Line, Bar } from 'react-chartjs-2'
import { countryDiagramData} from '../data/filteredData'

function ByCountry() {
  return (
    <div>
      <Bar data={countryDiagramData} />
    </div>
  )
}

export default ByCountry
