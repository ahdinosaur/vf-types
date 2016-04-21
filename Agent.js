const AgentType = require('./AgentType')

module.exports = Entity.extend({
  agentType: AgentType,
  url: Tc.String,
  image: Tc.String,
}, 'Agent')
