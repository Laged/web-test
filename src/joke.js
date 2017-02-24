// @flow
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

const json = async function (url: string): JSON {

  try {
    const result = await fetch(url)
    return await result.json()
  }
  catch (e) {
    console.log(e)
  }
}

const printJoke = async function (): string {

  try {
    const joke: json = await json('https://api.chucknorris.io/jokes/random')
    return joke.value
  }
  catch (e) {
    console.log(e)
  }
}

export default printJoke
