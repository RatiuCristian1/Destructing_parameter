/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 25, 78]
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]

let [john , mary, joe] = ages

console.log(john, mary, joe)

// Destructuring objects

let jobs = {
    mike: "Developer",
    larry: "Engineer",
    lora: "Accountant"
}

let { mike, larry, lora } = jobs
console.log( mike, larry, lora)

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"]
let [johnNative, johnSecondary] = languages
console.log(johnNative, johnSecondary)

let [, , maryNative, ,marySecondary] = languages
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
}

let { firstLanguage, fourthLanguage } = languages2

console.log(firstLanguage, fourthLanguage)

// Using rest parameter syntax

let fruits = ["apples", "bannas", "cherries", "pear", "watermelon"]
let [myFavorit, myOtherfavorit, ...others] = fruits
console.log(myFavorit)
console.log(myOtherfavorit)
console.log(others)


let favoritFoods = {
    brian: "pizza",
    anna: "pasta",
    mircea: "steak",
    laura: "soup"
}

let { brian, laura, ...rest } = favoritFoods
console.log(brian, laura, rest)