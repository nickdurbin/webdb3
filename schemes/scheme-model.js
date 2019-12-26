const db = require('../data/dbConfig')

function add(schemeData) {
  return db('scheme')
  .insert(schemeData)
  .then(id => {
    return findById(id[0])
  })
}

function addStep(data, id) {
  const stepData = { scheme_idd: id, ...data }
  
  return db('steps')
  .insert(stepData)
  .then(id => ({
    ...stepData, id: id[0]
  }))
}

function find() {
  return db('scheme')
}

function findById(id) {
  return db('scheme')
  .where({ id })
  .first()
}

function findSteps(id) {
  return db('steps')
}

function remove(id) {
  return db('scheme')
  .where({ id })
  .del()
}

function update(changes, id) {
  return db('sheme')
  .where({ id })
  .update(changes)
  .then(id => {
    if (id > 0) {
      findById(id)
    } else {
      return null
    }
  })
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