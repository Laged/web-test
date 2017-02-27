// @flow
import 'babel-polyfill'
import Hapi from 'hapi'
import bot from './bot'

const server:Hapi.Server = new Hapi.Server()

server.connection({ port: 3000, host: 'localhost' })

server.route({
  method: 'GET',
  path: '/',
  handler: (request: Hapi.Request, reply: Hapi.IReply) => {

    reply({ status: 'up' })
  }
})

server.route({
  method: 'POST',
  path: '/' + bot.token,
  handler: (request: Hapi.request, reply: Hapi.IReply) => {

    bot.processUpdate(request.body)
    reply().code(200)
  }
})

server.route({
  method: 'GET',
  path: '/*',
  handler: (request: Hapi.request, reply: Hapi.IReply) => {

    reply('Page not found').code(404)
  }
})

server.start((err: Hapi.err) => {

  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
