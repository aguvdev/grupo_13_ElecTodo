require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "elecTodo_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },

  test: {
    username: "root",
    password: "42871731",
    database: "elecTodo_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "42871731",
    database: "elecTodo_db",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
