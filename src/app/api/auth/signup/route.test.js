import { describe } from 'node:test'
import request from 'supertest'


describe('POST /signup', () => {
    describe('give a email and password', () => {
        test('should response with a 200 status code', async () => {
            const response = await request(app).post('/signup').send({
                email: 'admin@deveops.com',
                password: 'cys1ccnu'
            })
            expect(response.statusCode).toBe(200)
        })
    })
})