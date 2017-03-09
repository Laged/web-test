import TGBot from 'node-telegram-bot-api'
import Knex from 'knex'
import knexConfig from '../../knexfile'
import Message from '../models/message'
import { Model } from 'objection'

type MessageType = {
  message_id: number,
  from: {
    id: number,
    first_name: string,
    username: string,
  },
  chat: {
    id: number,
    title: string,
    type: string,
    all_members_are_administrators: boolean,
  },
  date: number,
  text: string
}

const token = process.env.TG_BOT_TOKEN
const knex = Knex(knexConfig.development)
Model.knex(knex)

let bot
if (process.env.NODE_ENV === 'production') {
  bot = new TGBot(token)
  bot.setWebHook('https://bot.domain.com/' + token) // Replace in production
}
else {
  bot = new TGBot(token, { polling: true })
}

bot.on('message', async function (msg: MessageType) {

  const message = await Message.query()
    .returning('*')
    .insert({
      timestamp: msg.date,
      message: msg.text
    })

  console.log('added to db', JSON.stringify(message, null, 2))
})

export default bot
