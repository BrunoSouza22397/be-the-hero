let request = require('supertest')
let app = require('../../src/app')
let connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        await request(app)
            .post('/ongs')
            .send({
                "name": "ONG_02",
                "email": "email@mail.com.br",
                "whatsapp": "51993655945",
                "city": "Canoas",
                "uf": "RS"
            })
            .then((res) => {
                expect(res.body).toHaveProperty('id')
                expect(res.body.id).toHaveLength(8)
            })
            .catch(err => { throw err })
    })
})