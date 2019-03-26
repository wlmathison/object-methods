// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const favoriteDinnerItem = {
    name: "Pad Thai",
    ethnicity: "Thai",
    restaurant: "Smiling Elephant",
    vegetarian: false
}

const foodEl = document.querySelector("#food");

let foodArticle = document.createElement("article");
foodArticle.classList = "food";
foodArticle.innerHTML = "<h1>Favorite Dinner Items</h1>"

for(const food of Object.entries(favoriteDinnerItem)) {
foodArticle.innerHTML += `<p>${food[0]}: ${food[1]}</p>`
}

foodEl.appendChild(foodArticle)