const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)


module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => ({ dish_id: ids[0] }))
}

function getDish(id) {
    return db('dishes')
        .where({ dish_id: Number(id) })
        .first()
}

function getRecipes() {
    return db('recipes')
}


function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => ({ recipe_id: id }))
} 
