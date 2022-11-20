import config from "./config";
import { getServer } from "./server";
import { logger } from "./util/logger";

getServer().listen(config.port, () => {
  logger.info(`Server started on port:${config.port}`);
});
