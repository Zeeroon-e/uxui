import data from './json_award.json'
import laure from './json_laureates.json'

const categoryData = data.map(object => object.category.en)

let categoryLabels: string[] = [], categoryCount: any = {}

for (let i = 0; i < categoryData.length; i++) {
    
    if ( !categoryLabels.includes(categoryData[i])) {
        categoryLabels.push(categoryData[i])
    }

    if (categoryCount[categoryData[i]] === undefined) {
        categoryCount[categoryData[i]] = 1
    } else {
       categoryCount[categoryData[i]]++ 
    }
    
}

let categoryDataset: number[] = []
categoryLabels.forEach(label => {
    categoryDataset.push(categoryCount[label])
})
    


const categoryDiagramData = {
    datasets: [
        {
            data: categoryDataset,
            label: 'Count',
            backgroundColor: [
                '#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'
            ],
            hoverOffset: 10, 
        }
    ],
    labels: categoryLabels,
    options: {
        responsive:true,
        maintainAspectRatio: false
        
    }
}

// Gender


const genderData: any = laure.map(object => object.gender)

const filteredGenderData: any = genderData.map((label: string) => {
    if(label === undefined){
        return 'Orgs'
    }
    return label
})

console.log(filteredGenderData)

let genderLabels: string[] = [], genderCount: any = {}

for (let i = 0; i < filteredGenderData.length; i++) {
    
    if ( !genderLabels.includes(filteredGenderData[i])) {
        genderLabels.push(filteredGenderData[i])   
    }

    if (genderCount[filteredGenderData[i]] === undefined) {
        genderCount[filteredGenderData[i]] = 1
    } else {
       genderCount[filteredGenderData[i]]++ 
    }
}




let genderDataset: number[] = []
genderLabels.forEach(label => {
    
    genderDataset.push(genderCount[label])
})

const genderDiagramData = {
    datasets: [
        {
            data: genderDataset,
            label: 'Count',
            backgroundColor: [
                '#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'
            ],
            hoverOffset: 10, 
        }
    ],
    labels: genderLabels,
    options: {
        responsive:true,
        maintainAspectRatio: false
        
    }
}

export { categoryDiagramData, genderDiagramData }