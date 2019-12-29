const db = require('../data/dbConfig')

function add(schemeData) {
  return db('schemes')
  .insert(schemeData)
  .then(id => {
    return findById(id[0])
  })
}

function addStep(data, id) {
  const stepData = { scheme_id: id, ...data }
  
  return db('steps')
  .insert(stepData)
  .then(id => ({
    ...stepData, id: id[0]
  }))
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes')
  .where({ id })
  .first()
}

function findSteps(id) {
  return db('steps')
}

function remove(id) {
  return db('schemes')
  .where({ id })
  .del()
}

function update(changes, id) {
  return db('schemes')
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