var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Subcategory Information",()=>{
    
    test("Get subcategory Info", async() =>{
        let response = await request.get('api/addToCart')
        expect(response.status).toBe(404)
        
    })
})