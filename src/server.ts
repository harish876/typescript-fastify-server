import Fastify from "fastify";
import { applicationsRoutes } from "./modules/applications/applications.routes";
import { loggerConfig } from "./utils/appLogger";

export const startServer = async () => {
  const app = Fastify({
    logger: loggerConfig["development"],
  });

  //basic healthcheck route
  app.get("/healthcheck", async (request, _) => {
    request.log.info("Health Check route is working fine...");
    return { message: "Health Check route is working fine..." };
  });

  app.register(applicationsRoutes,{ prefix: "/api/applications"})

  return app;
};
