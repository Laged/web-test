// @flow
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

async function json(url: string): JSON {
  try {
    const result: Promise = await fetch(url)
    return await result.json() 
  } catch (e) {
    console.log(e)
  }
}

async function printJoke(): string {
  try {
    const joke = await json('https://api.chucknorris.io/jokes/random')
    console.log(joke.value)
    return joke.value
  } catch (e) {
    console.log(e)
  }
}

export default printJoke
