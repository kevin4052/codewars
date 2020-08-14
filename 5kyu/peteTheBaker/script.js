//my solution
function cakes(recipe, available) {
  
    let numberOfCakes = 0;
    
    for (const recipeIngredient in recipe) {
      
      if (!(recipeIngredient in available)) return 0;
      
      let ingredientAmount = available[recipeIngredient] / recipe[recipeIngredient];
      
      if (ingredientAmount < numberOfCakes || numberOfCakes === 0) numberOfCakes = ingredientAmount;
      
    }  
    return Math.floor(numberOfCakes);
  }

//best practice
function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }