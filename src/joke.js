import 'babel-polyfill'
import request from 'request'
 
function get(url) {
  return new Promise( (resolve, reject) => {
    request({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, (err, resp, body) => {
      if(err){
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}

async function printJoke() {
  try {
    const joke = await get('https://api.chucknorris.io/jokes/random')
    console.log(joke.value)
    return joke.value
  } catch (e) {
    console.log(e)
  }
}

export default printJoke