import award from './json_award.json'
import laure from './json_laureates.json'


const laureCategoryData: (string|undefined)[] = laure.map(laure => {
	for(let price of laure.nobelPrizes) {
		return price.category.en;
	}
});

const countryData: (string|undefined)[] = laure.map(laure => {
	if(laure.founded) {
		if(laure.founded.place.countryNow) {
			return laure.founded.place.countryNow.en;
		} else {
			return "not found";
		}
	} else if(laure.birth) {
		if(laure.birth.place.countryNow) {
			return laure.birth.place.countryNow.en;
		}
	} else {
		return "not found";
	}
});
const awardYears: string[] = award.map(award => award.awardYear);
const yearlyPriceMoney: number[] = award.map(award => award.prizeAmount);


function setLablesAndCount(dataArray: any, labelArray: string[], countArray: any, undefinedLabel: string) {
	for(let data of dataArray) {
		if(data == undefined) {
			if(!labelArray.includes(undefinedLabel)) {
				labelArray.push(undefinedLabel);
			}
	
			if (countArray[undefinedLabel] === undefined ) {
				countArray[undefinedLabel] = 1;
			} else {
				countArray[undefinedLabel]++;  
			}
		} else {
		
			if(!labelArray.includes(data)) {
				labelArray.push(data);
			}
			
			if (countArray[data] === undefined ) {
				countArray[data] = 1;
			} else {
				countArray[data]++;  
			}
		}
	}
}

//// category
let lauretsCategoryLable: string[] = [];
let lauretsCategoryCount: any = {};
setLablesAndCount(laureCategoryData, lauretsCategoryLable, lauretsCategoryCount, "other category");


let lauretsCategoryDataset: number[] = [];
lauretsCategoryLable.forEach(label => {
	lauretsCategoryDataset.push(lauretsCategoryCount[label])
});

const categoryDiagramData = {
	labels: lauretsCategoryLable,
	datasets: [
		{
			label: 'Antal',
			data: lauretsCategoryDataset,
			backgroundColor: ['#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'],
			hoverOffset: 10,
            borderColor: '#33333',
		}
        
	],
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
            borderColor: '#33333', 
        }
    ],
    labels: genderLabels,
    options: {
        responsive:true,
        maintainAspectRatio: false
        
    }
}



// Country

let countryLabels: string[] = [];
let countryCount: any = {};
setLablesAndCount(countryData, countryLabels, countryCount, "other countries");


let processedCountryData: { country: string; count: any; }[] = [];
countryLabels.forEach(label => {
	processedCountryData.push({"country": label, "count": countryCount[label]});
});

processedCountryData.sort((a, b) => b.count - a.count);
processedCountryData = processedCountryData.filter(item => item.count >= 3);

let updatedCountryLables: string[] = [];
let countryDataset: number[] = [];
for(let data of processedCountryData) {
	updatedCountryLables.push(data.country)
	countryDataset.push(data.count);
}

 const countryDiagramData = {
	labels: updatedCountryLables,
	datasets: [
		{
			label: "Quantity",
			data: countryDataset,
			backgroundColor: ['#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'],
			borderColor: '#3c2f2f'
		}
	],
}

/// average price money per year
const AveragePrizeDiagramData =  {
	labels: awardYears,
	datasets: [
        {
        
            label: 'Prize money',
            data: yearlyPriceMoney,
			backgroundColor: ['#C060A1'],
	    }
    ],
    options: {
        responsive:true,
        maintainAspectRatio: false
        
    }
};



export { categoryDiagramData, genderDiagramData, countryDiagramData, AveragePrizeDiagramData }