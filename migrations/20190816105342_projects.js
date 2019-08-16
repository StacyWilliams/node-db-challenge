
exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 128).unique().notNullable();
      tbl.string('description', 254);
      tbl.boolean('completed').notNullable();
    })
    .createTable('resources',tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 254);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 254).notNullable();
        tbl.string('additionalInfo', 254);
        tbl.boolean('completed').notNullable();

    })
       


  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      };

