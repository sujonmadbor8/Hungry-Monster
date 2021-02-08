const searchMeals = async() => {
    const searchText = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
        <div class="card-meal" onclick="displayMealDetail(meal)">
        <div class="meal-img"><img src="${meal.strMealThumb}"></div>
        <div class="meal-name"><h6>${meal.strMeal}</h6></div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
        displayMealDetail(meal);
    });
}

const displayMealDetail = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetals(data.meals[0]))
}
const mealDetals = meal => {
    console.log(meal);
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}">
    <h2> ${meal.strIngredient1 } </h2>
    <p>${meal.strIngredient2}</p>
    <p>${meal.strIngredient3}</p>
    <p>${meal.strIngredient4}</p>
    <p>${meal.strIngredient5}</p>
    <p>${meal.strIngredient6}</p>
    <p>${meal.strIngredient7}</p>
    <p>${meal.strIngredient8}</p>
    <p>${meal.strIngredient9}</p>
    <p>${meal.strIngredient10}</p>
    // `;
}