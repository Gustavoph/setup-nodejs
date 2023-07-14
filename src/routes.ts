import { type FastifyInstance } from 'fastify'

export const appRoutes = (app: FastifyInstance) => {
  app.get('/', (request, reply) => {
    return reply.status(200).send({ message: 'hello world!' })
  })
}
