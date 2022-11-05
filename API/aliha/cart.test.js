var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Cart Information",()=>{
    
    test("Get cart Information", async() =>{
        let response = await request.get('api/cart')
       let response_body = JSON.parse(response.text)
        expect(response.status).toBe(200)
        expect(response_body.pageData.title).toBe('My Cart')
        
    })
})