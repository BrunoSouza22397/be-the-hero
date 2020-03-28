const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        let ong_id = request.headers.authorization

        let incidents = await connection('incidents')
          .where('ong_id', ong_id)
          .select('*')
        
        return response.json(incidents)
    }
}