const Entity = require('./Entity')
const Agent = require('./Agent')
const RelationshipType = require('./RelationshipType')

module.exports = Entity.extend({
  relationshipType: RelationshipType,
  source: Agent,
  target: Agent,
  context: Agent,
}, 'Relationship')
