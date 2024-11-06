// Sample recipe data (replace this with API integration in the future)
const recipes = [
    {
        id: 1,
        title: "Puri-Sabji",
        category: "breakfast",
        vegetarian: true,
        vegan: false,
        ingredients: "Flour, Butter, Oil, Chickpea",
        instructions: "Mix ingredients and cook on a skillet.",
        image: "image/Breakfast.jpg"
    },
    {
        id: 2,
        title: "Poha",
        category: "breakfast",
        vegetarian: true,
        vegan: true,
        ingredients: "Rice, Salad, dry nuts, lemon",
        instructions: "Cook all ingredients until fry.",
        image: "image/poha.jpg"
    },
    {
        id: 3,
        title: "Bread Pakoda",
        category: "breakfast",
        vegetarian: true,
        vegan: true,
        ingredients: "Bread, Souce",
        instructions: "Cook all ingredients until fry.",
        image: "image/Bread-Chap-Breakfast.jpg"
    },
    {
        id: 4,
        title: "Bread Omlette",
        category: "breakfast",
        vegetarian: false,
        vegan: false,
        ingredients: "Bread, Omlette",
        instructions: "Cook all ingredients until fry.",
        image: "image/Bread-Omlette-Breakfast.jpg"
    },
    {
        id: 5,
        title: "Idle",
        category: "breakfast",
        vegetarian: true,
        vegan: true,
        ingredients: "Rice, Salad, dry nuts, lemon",
        instructions: "Cook all ingredients until fry.",
        image: "image/Idle-Breakfast.jpg"
    },
    {
        id: 6,
        title: "Rice Floor Roti",
        category: "breakfast",
        vegetarian: true,
        vegan: true,
        ingredients: "Rice, Salad, dry nuts, lemon",
        instructions: "Cook all ingredients until fry.",
        image: "image/Rice-Floor-Roti-Breakfast.jpg"
    },
    {
        id: 7,
        title: "Masala-Dosa",
        category: "lunch",
        vegetarian: true,
        vegan: false,
        ingredients: "Lettuce, Tomatoes, Cucumber, Olive Oil",
        instructions: "Mix all ingredients and serve fresh.",
        image: "image/Lunch.jpg"
    },
    {
        id: 8,
        title: "Biriyani",
        category: "lunch",
        vegetarian: false,
        vegan: false,
        ingredients: "Lettuce, Tomatoes, Cucumber, Olive Oil",
        instructions: "Mix all ingredients and serve fresh.",
        image: "image/Biriyani-Lunch.jpg"
    },
    {
        id: 9,
        title: "Sabji Chawal",
        category: "lunch",
        vegetarian: true,
        vegan: true,
        ingredients: "Lettuce, Tomatoes, Cucumber, Olive Oil",
        instructions: "Mix all ingredients and serve fresh.",
        image: "image/Sabji-Chawal-Lunch.jpg"
    },
    {
        id: 10,
        title: "Veg-Thali",
        category: "lunch",
        vegetarian: true,
        vegan: false,
        ingredients: "Lettuce, Tomatoes, Cucumber, Olive Oil",
        instructions: "Mix all ingredients and serve fresh.",
        image: "image/Lunch2.jpg"
    },
    {
        id: 11,
        title: "Veg Roll",
        category: "dinner",
        vegetarian: true,
        vegan: false,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Dinner.jpg"
    },
    {
        id: 12,
        title: "Chicken Fry",
        category: "dinner",
        vegetarian: false,
        vegan: false,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Dinner2.jpg"
    },
    {
        id: 13,
        title: "Curry Chawal",
        category: "dinner",
        vegetarian: true,
        vegan: false,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Curry-Chawal-Dinner.jpg"
    },
    {
        id: 14,
        title: "Panner Butter Masala and NaaN",
        category: "dinner",
        vegetarian: true,
        vegan: false,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Naan-Butter-Panner-Dinner.jpg"
    },
    {
        id: 15,
        title: "Sabji Roti",
        category: "dinner",
        vegetarian: true,
        vegan: false,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Roti-Sabji_Dinner.jpg"
    },
    {
        id: 16,
        title: "Veg Thali",
        category: "dinner",
        vegetarian: true,
        vegan: true,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Veg-Thali-Dinner.jpg"
    },
    {
        id: 17,
        title: "Mixed Fruit and Fruit Shake",
        category: "dinner",
        vegetarian: true,
        vegan: true,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Vegan-Mix-Fruit.jpg"
    },
    {
        id: 18,
        title: "Mixed Salad",
        category: "dinner",
        vegetarian: true,
        vegan: true,
        ingredients: "Spaghetti, Minced Meat, Tomato Sauce, Onions, Garlic",
        instructions: "Cook spaghetti, fry meat with onions and garlic, add sauce.",
        image: "image/Vegan-Salad.jpg"
    },
    
   
];

// Function to display recipes
function displayRecipes(recipesToDisplay) {
    const recipeResults = document.getElementById("recipeResults");
    recipeResults.innerHTML = "";  // Clear previous results

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.ingredients.split(',').slice(0, 3).join(', ')}...</p>
        `;
        card.onclick = () => showRecipeModal(recipe);
        recipeResults.appendChild(card);
    });
}

// Function to search recipes
function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
}

// Function to show the recipe modal
function showRecipeModal(recipe) {
    document.getElementById('recipeModal').style.display = "block";
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeImage').style.width="150px";
    document.getElementById('recipeIngredients').textContent = "Ingredients: " + recipe.ingredients;
    document.getElementById('recipeInstructions').textContent = "Instructions: " + recipe.instructions;
}

// Function to close the modal
function closeModal() {
    document.getElementById('recipeModal').style.display = "none";
}

// Function to filter recipes
function filterRecipes() {
    const isBreakfast = document.getElementById('filterBreakfast').checked;
    const isLunch = document.getElementById('filterLunch').checked;
    const isDinner = document.getElementById('filterDinner').checked;
    const isVegetarian = document.getElementById('filterVegetarian').checked;
    const isVegan = document.getElementById('filterVegan').checked;
    const isNonVegetarian = document.getElementById('filterNonveg').checked;

    const filteredRecipes = recipes.filter(recipe => {
        const categoryMatch = (
            (isBreakfast && recipe.category === 'breakfast') ||
            (isLunch && recipe.category === 'lunch') ||
            (isDinner && recipe.category === 'dinner')
        );
        const dietaryMatch = (
            (!isVegetarian || recipe.vegetarian) &&
            (!isVegan || recipe.vegan) &&
            (!isNonVegetarian || recipe.vegetarian == false)
        );
        return categoryMatch && dietaryMatch;
    });

    // If no filters are selected, display all recipes
    const finalRecipes = filteredRecipes.length ? filteredRecipes : recipes;
    if(isVegetarian){
        finalRecipes.filter(val => val.vegetarian==true);
    }
    if(isVegan){
        finalRecipes.filter(val=>val.vegan==true);
    }
    if(isNonVegetarian){
        finalRecipes.filter(val=>val.vegetarian==false);
    }
    displayRecipes(finalRecipes);
}

// Function to save a recipe to local storage
function saveRecipe() {
    const recipeTitle = document.getElementById('recipeTitle').textContent;
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(recipeTitle)) {
        favorites.push(recipeTitle);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${recipeTitle} has been saved to favorites!`);
    } else {
        alert(`${recipeTitle} is already in favorites!`);
    }
}

// Initial display of recipes
displayRecipes(recipes);
