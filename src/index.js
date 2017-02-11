// @flow
import 'babel-polyfill'
import Hapi from 'hapi'
import printJoke from './joke'

const server = new Hapi.Server()
const getJoke = (request, reply) => reply(printJoke())
const notFound = (request, reply) => reply('Page not found :(').code(404)

server.connection({ port: 3000, host: 'localhost' })

server.route({
  method: 'GET',
  path: '/',
  handler: getJoke
})

server.route({
  method: 'GET',
  path: '/*',
  handler: notFound
})

server.start((err) => {

  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
  printJoke()
})
