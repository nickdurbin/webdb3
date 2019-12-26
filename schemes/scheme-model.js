const db = require('./data/dbConfig')

function add() {

}

function addStep() {

}

function find() {
  return db('scheme')
}

function findById(id) {
  return db('scheme').where({ id }).first()
}

function findSteps(id) {
  return db('steps')
}

function remove() {

}

function update() {

}

module.exports = {
  add,
  addStep,
  find, 
  findById,
  findSteps,
  remove,
  update
}