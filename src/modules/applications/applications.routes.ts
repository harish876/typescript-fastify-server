import { FastifyInstance } from "fastify";
import { createApplicationHandler } from "./applications.controllers";
import { createApplicationBodySchemaJson } from "./applications.schemas";

export async function applicationsRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: createApplicationBodySchemaJson,
    },
    createApplicationHandler
  );

  app.get("/", () => {});
}
