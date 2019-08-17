
exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 128).unique().notNullable();
      tbl.string('description', 254);
      tbl.boolean('completed').notNullable();
    })
    .createTable('resources',tbl => {
        tbl.increments();
        tbl.string('name', 128).unique().notNullable();
        tbl.string('description', 254);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 254).notNullable();
        tbl.string('notes', 254);
        tbl.boolean('completed').notNullable();
    })
    .createTable("project_tasks", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer("task_id")
            .notNullable()
            .references("id")
            .inTable("tasks")
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
  })
    .createTable("project_resources", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
 
});
    
}
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('project_tasks')
      .dropTableIfExists('project_resources')
     };

