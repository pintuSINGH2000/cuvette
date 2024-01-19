const Food = require("./food")

// list all the food items
const getAllFoodItems = (Foods) => {
    Foods.map((food)=>{
        console.log(food);
    })
}

// list all by category
const getSpecificCategoryItems = (Foods,category) => {
    let allVegetable = Foods.filter((food)=>{
        return food.category === category;
    })
    console.log(allVegetable);
}

const getSpecificCalorieItems = (Foods,isAbove,calorie) => {
    let items = Foods.filter((food)=>{
        return  isAbove ? food.calorie > calorie : food.calorie< calorie;
    })
    console.log(items);
}

const sortItems = (Foods,isDec,key) => {
    let items=Foods.slice().sort((item1,item2)=>{
        return  isDec ? item2[key]-item1[key] : item1[key] - item2[key];
    })
    console.log(items);
}



// list all the food items
getAllFoodItems(Food);

// list all the food items with category vegetables
getSpecificCategoryItems(Food,"Vegetable");

// list all the food items with category fruit
getSpecificCategoryItems(Food,"Fruit");

// list all the food items with category protien
getSpecificCategoryItems(Food,"Protein");

// list all the food items with category nuts
getSpecificCategoryItems(Food,"Nuts");

// list all the food items with category grains
getSpecificCategoryItems(Food,"Grain");

// list all the food items with category dairy
getSpecificCategoryItems(Food,"Dairy");

// list all the food items with calorie above 100
getSpecificCalorieItems(Food,true,100);

// list all the food items with calorie below 100
getSpecificCalorieItems(Food,false,100);

// list all the food items with highest protien content to lowest
sortItems(Food,true,"protiens");

// list all the food items with lowest cab content to highest
sortItems(Food,false,"cab");