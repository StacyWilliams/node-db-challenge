
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
        tbl.string('notes', 254);
        tbl.boolean('completed').notNullable();
    })
    .createTable("project_task", tbl => {
        tbl.increments();
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
   
        tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("task")
     
  });
}
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('tasks')
      };

