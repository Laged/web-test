import 'babel-polyfill' // Risky, clients wont have babel-polyfill
import chai from 'chai'
import printJoke from '../src/joke'
chai.should()

describe('Joke generator src/joke.js', () => {
  it('should print a joke', () => {
    return printJoke()
    .then( joke => joke.should.be.a('string'))
  })
})