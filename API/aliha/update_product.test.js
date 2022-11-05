var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Product Information update",()=>{
    
    test("Get product Info", async() =>{
        let response = await request.get('api/p/1')
       let response_body = JSON.parse(response.text)
       let temp_body = response_body
       temp_body.pageData.title = 'My Product'
       let response_2 = await request.put('api/p/1').send(temp_body)
        expect(response.status).toBe(200)
        expect(response_body.pageData.title).toBe('My Product')
        
    })
})