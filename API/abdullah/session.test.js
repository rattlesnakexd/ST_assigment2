var supertest = require('supertest')
const request = supertest('http://localhost:3000/')

describe("Session Information",()=>{
    
    test("Get subcategory Info", async() =>{
        let response = await request.get('api/session')
       let response_body = JSON.parse(response.text)
        expect(response.status).toBe(200)
        expect(response_body.name).toBe('Mark')
        
    })
})