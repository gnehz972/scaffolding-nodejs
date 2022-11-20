import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./route/routes";
import swaggerJson from "./api-spec/swagger.json";
import swaggerUi from "swagger-ui-express";
import actuator from "express-actuator";
import { handleGlobalException } from "./middleware/handle-global-exception";
import http from "http";
import config from "./config";
import { handleNotFound } from "./middleware/handle-not-found";

const app = express();
app.use(bodyParser.json());
app.use(config.swaggerPath, swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(
  actuator({
    basePath: config.actuatorPath,
    infoGitMode: "full",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
RegisterRoutes(app);
app.use(handleNotFound);
app.use(handleGlobalException);

export const getServer = () => http.createServer(app);
