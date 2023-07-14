import Fastify from 'fastify'
import { appRoutes } from './routes'

export const app = Fastify({ logger: true })

appRoutes(app)
