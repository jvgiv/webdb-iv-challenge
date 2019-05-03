
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        {ingredient_name: 'ingredient1', recipe_id: 1, ingredient_id: 1},
        {ingredient_name: 'ingredient1', recipe_id: 2, ingredient_id: 2},
        {ingredient_name: 'ingredient1', recipe_id: 3, ingredient_id: 3},
        {ingredient_name: 'ingredient1', recipe_id: 4, ingredient_id: 4},
        {ingredient_name: 'ingredient1', recipe_id: 5, ingredient_id: 5},
        {ingredient_name: 'ingredient1', recipe_id: 6, ingredient_id: 6},
        {ingredient_name: 'ingredient1', recipe_id: 7, ingredient_id: 7},
        {ingredient_name: 'ingredient1', recipe_id: 8, ingredient_id: 8},
        {ingredient_name: 'ingredient1', recipe_id: 9, ingredient_id: 9},
        {ingredient_name: 'ingredient1', recipe_id: 10, ingredient_id: 10},
        {ingredient_name: 'ingredient1', recipe_id: 11, ingredient_id: 11}
      ]);
    });
};
