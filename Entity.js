const Tc = require('tcomb')

const Entity = Tc.declare('Entity')

Entity.define(Tc.struct({
  id: Tc.String,
  name: Tc.String,
  note: Tc.String,
  composes: Tc.list(Tc.Base, 'Entities'),
}, 'Entity')

module.exports = Entity
