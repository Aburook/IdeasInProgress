const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  reply.send({ message: "Hello Abu" });
});

fastify.listen({ port: 2000 }, async function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
