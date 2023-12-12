import TicketDTO from '../dto/tickets.dto.js'

export default class TicketRepository {
    constructor(dao) {
        this.dao = dao
    }

    get = async() => await this.dao.get()
    create = async(data) => {
        const dataToInsert = new TicketDTO(data)
        return await this.dao.create(dataToInsert)
    }
    getById = async(id) => await this.dao.getById(id)
}