
exports.up = function(knex, Promise) {
    // CREATE TABLE `dishes` (
    //     `dish_id` INTEGER,
    //     `name` STRING,
    //     PRIMARY KEY (`dish_id`)
    //   );
    return knex.schema
        .createTable('dishes', tbl => {
            tbl.increments('dish_id');

            tbl
                .string('name', 128)
                .notNullable()
                .unique()
        })
        // CREATE TABLE `recipes` (
        //     `recipe_id` INTEGER,
        //     `dish_id` INTEGER,
        //     PRIMARY KEY (`recipe_id`),
        //     KEY `FK` (`dish_id`)
        //   );
        .createTable('recipes', tbl => {
            tbl
                .increments('recipe_id')

            tbl
                .string('recipe_name', 256)

            tbl
                .integer('dishes_id')
                .unsigned()
                .notNullable()
                .references('dish_id')
                .inTable('dishes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })

        // CREATE TABLE `ingredients` (
        //     `ingredient_id` INTEGER,
        //     `ingredient_name` STRING,
        //     PRIMARY KEY (`ingredient_id`)
        //   );
        
        .createTable('ingredients', tbl => {
            tbl
                .increments('ingredient_id')

            tbl
                .string('ingredient_name', 128)
        })

        
        // CREATE TABLE `recipe_ingredient` (
        //     `id` INTEGER,
        //     `recipe_id` INTEGER,
        //     `ingredient_id` INTEGER,
        //     PRIMARY KEY (`id`),
        //     KEY `FK` (`recipe_id`, `ingredient_id`)
        // );

        .createTable('recipe_ingredient', tbl => {
            tbl
                .increments()

            tbl
                .string('ingredient_name', 128)
            
            tbl 
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')


                // CREATE TABLE `measurements` (
                //     `measurement_id` INTEGER,
                //     `measurement_name` STRING,
                //     `AMOUNT` Type,
                //     PRIMARY KEY (`measurement_id`)
                //   );
                  
        // .createTable('measurements', tbl => {
        //     tbl
        //         .increments('measurement_id')

        //     tbl
        //         .string('measurement_name')

        //     tbl
        //         .decimal('amount')

            
        // })
        })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('dishes')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('measurements')
};
