import config from '../config/config.js'
import mongoose from 'mongoose'

export let User
// export const User
export let Ticket

switch (config.persistence) {
    case "FILE":
        const { default: UserFile } = await import('./file/users.file.dao.js')
        const { default: TicketFile } = await import('./file/tickets.file.dao.js')
        User = UserFile
        Ticket = TicketFile
        break;
    case "MONGO":
        mongoose.connect(config.mongoURI, {
            dbName: config.mongoDBName
        })
        const { default: UserMongo } = await import('./mongo/users.mongo.dao.js')
        const { default: TicketMongo } = await import('./mongo/tickets.mongo.dao.js')
        User = UserMongo
        Ticket = TicketMongo
        break;

    default:
        break;
}