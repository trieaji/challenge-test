import { app } from "./src/application/web.js";
import { logger } from "./src/application/logging.js";

app.listen(3004, () => {
    logger.info("App start")
})