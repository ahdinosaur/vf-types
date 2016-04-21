const AgentType = require('./AgentType')

const Agent = AgentType({
  name: "Agent",
})

const Person = AgentType({
  name: "Person"
})

const Group = AgentType({
  name: "Group"
})

const Bot = AgentType({
  name: "Person"
})

module.exports = {
  Agent,
  Person,
  Group,
  Bot
}
