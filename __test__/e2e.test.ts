import { app } from '../src/app'
import request from 'supertest'

describe('E2E test', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return hello world', async () => {
    const response = await request(app.server).get('/').send()

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('hello world!')
  })
})