// @flow
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

type JokeType = {
  category: null,
  icon_url: string,
  id: string,
  url: string,
  value: string
};

const json = async function (url: string): Promise<?JokeType> {

  try {
    const result = await fetch(url)
    return result.json()
  }
  catch (e) {
    console.log(e)
  }
}

const printJoke = async function (): Promise<?string> {

  try {
    const joke = await json('https://api.chucknorris.io/jokes/random')
    if (joke) {
      return joke.value
    }
    return 'No joke found'
  }
  catch (e) {
    console.log(e)
  }
}

export default printJoke
