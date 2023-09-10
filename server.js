const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  fastify.register(require('./routes/route1'))

  const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()