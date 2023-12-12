import express from 'express'
import ticketRouter from './routers/tickets.router.js'
import userRouter from './routers/users.router.js'

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(8080, () =>console.log('Server Up'))