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



// Country

const birthData: any = laure.map(object => object.birth)

let countryLabels: string[] = [], countryCount: any = {}

birthData.forEach(item => {

    if(item){
        
        if(item.place.country.en == item.place.country.en){
            countryLabels.push(item.place.country.en)
        }

        if (countryCount[item.place.country.en] === undefined) {
            countryCount[item.place.country.en] = 1
        }
        else if(item.place.country.en == item.place.country.en){
            countryCount[item.place.country.en]++
        }
    }
})

let countryDataset: number[] = []
countryLabels.forEach(label => {
    
    countryDataset.push(countryCount[label])
})

const countryDiagramData = {
    datasets: [
        {
            data: countryDataset,
            label: 'Count',
            backgroundColor: [
                '#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'
            ],
            hoverOffset: 10, 
        }
    ],
    labels: countryLabels,
    options: {
        responsive:true,
        maintainAspectRatio: false
        
    }
}
// let countryLabels: string[] = [], countryCount: any = {}

// for (let i = 0; i < birthData.length; i++) {
    
//     if ( !countryLabels.includes(birthData[i])) {
//         countryLabels.push(birthData[i])   
//     }

//     if (countryCount[birthData[i]] === undefined) {
//         countryCount[birthData[i]] = 1
//     } else {
//        countryCount[birthData[i]]++ 
//     }
// }

console.log('allCountries: ', countryDataset)



export { categoryDiagramData, genderDiagramData, countryDiagramData }