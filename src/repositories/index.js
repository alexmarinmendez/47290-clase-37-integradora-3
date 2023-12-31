import { User, Ticket } from '../dao/factory.js'

import UserRepository from './user.repository.js'
import TicketRepository from './ticket.repository.js'

export const UserService = new UserRepository(new User())
export const TicketService = new TicketRepository(new Ticket())
