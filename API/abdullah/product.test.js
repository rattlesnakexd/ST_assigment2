var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Product Information",()=>{
    
    test("Get product 1 Info", async() =>{
        let response = await request.get('api/p/1')
       let response_body = JSON.parse(response.text)
        expect(response.status).toBe(200)
        expect(response_body.pageData.title).toBe('Product 1')
        
    })
})