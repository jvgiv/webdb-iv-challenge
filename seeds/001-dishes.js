
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Pizza'},
        {name: 'Sandwich'},
        {name: 'Sushi'},
        {name: 'Ramen'},
        {name: 'Burrito'},
        {name: 'Taco'},
        {name: 'BBQ'},
        {name: 'Soup'},
        {name: 'Steak'},
        {name: 'Mashed Potatoes'},
        {name: 'Rice'}
      ]);
    });
};
