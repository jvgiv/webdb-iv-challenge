
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Pizza Making', dishes_id: 1},
        {recipe_name: 'Sandwich Making', dishes_id: 2},
        {recipe_name: 'Sushi Making', dishes_id: 3},
        {recipe_name: 'Ramen Making', dishes_id: 4},
        {recipe_name: 'Burrito Making', dishes_id: 5},
        {recipe_name: 'Taco Making', dishes_id: 6},
        {recipe_name: 'BBQ Making', dishes_id: 7},
        {recipe_name: 'Soup Making', dishes_id: 8},
        {recipe_name: 'Steak Making', dishes_id: 9},
        {recipe_name: 'Mashed Potatoes Making', dishes_id: 10},
        {recipe_name: 'Rice', dishes_id: 11}
      ]);
    });
};


