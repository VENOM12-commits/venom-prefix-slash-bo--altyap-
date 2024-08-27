const { ActivityType } = require("discord.js")
module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    let activities = [`venom sıfırdanmı`, `VenCode`, `discord.gg/venomum`, `${client.user.username} dır ismim`], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Playing }))
  }
};