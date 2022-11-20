const basePath = "/api/v1";

export default {
  basePath: basePath,
  port: process.env.server_port || 3000,
  swaggerPath: basePath + "/swagger-ui",
  actuatorPath: basePath + "/actuator",
};
