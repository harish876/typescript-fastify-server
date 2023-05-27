import { FastifyReply, FastifyRequest } from "fastify";
import { createApplication } from "./applications.services";
import { createApplicationBody } from "./applications.schemas";

export async function createApplicationHandler(
  request: FastifyRequest<{
    Body: createApplicationBody;
  }>,
  reply: FastifyReply
) {
  const { name } = request.body;
  const application = await createApplication({
    name,
  });

  return { application };
}
