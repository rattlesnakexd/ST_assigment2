var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Subcategory Information",()=>{
    
    test("Get subcategory Info", async() =>{
        let response = await request.get('api/s/1')
       let response_body = JSON.parse(response.text)
        expect(response.status).toBe(200)
        expect(response_body.pageData.title).toBe('Subcategory 1')
        
    })
})