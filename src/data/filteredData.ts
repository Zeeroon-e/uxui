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


const genderData = laure.map(object => object.gender)

let genderLabels: string[] = [], genderCount: any = {}

for (let i = 0; i < genderData.length; i++) {
    
    if ( !genderLabels.includes(genderData[i])) {
        genderLabels.push(genderData[i])   
    }

    if (genderCount[genderData[i]] === undefined) {
        genderCount[genderData[i]] = 1
    } else {
       genderCount[genderData[i]]++ 
    }
}


let genderDataset: number[] = []
genderLabels.forEach(label => {
    if(label == undefined){
        label = 'Orgs'
    }
    console.log(label)
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