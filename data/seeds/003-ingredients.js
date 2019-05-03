
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cheese'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'fish'},
        {ingredient_name: 'noodles'},
        {ingredient_name: 'tortilla'},
        {ingredient_name: 'meat'},
        {ingredient_name: 'bbq sauce'},
        {ingredient_name: 'soup'},
        {ingredient_name: 'steak'},
        {ingredient_name: 'mashed potates'},
        {ingredient_name: 'rice'}
      ]);
    });
};
