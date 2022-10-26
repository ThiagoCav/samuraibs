const { defineConfig } = require("cypress");

const { Pool } = require("pg")

const pool = new Pool({
  host: 'peanut.db.elephantsql.com',
  user: 'cgdymwmu',
  password: 'fIkVoBcNSUh_uy8RIgpUfoGS7MhV7OGk',
  database: 'cgdymwmu',
  port: 5432 //Padrão
})

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1440,
    viewportHeight: 900,

    setupNodeEvents(on, config) {
      on("task", {
        removeUser(email) {
          return new Promisse(function (resolve){
            pool.query('DELETE FROM public.users WHERE email= $1', [email], function(error, result) {
              if (error) {
                throw error
              }
              resolve({success: result})
            })
          })
        }
      })
    }
  },
});
