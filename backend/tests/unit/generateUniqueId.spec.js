let generateUniqueID = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate a unique ID', () => {
        let id = generateUniqueID()
        
        expect(id).toHaveLength(8)
    })
})