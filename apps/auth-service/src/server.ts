import { getEnvironmentVariables } from "environment-variable-handler";
import express, { json } from "express";
import { logger } from "logger/src";
import { userRouter } from "./user/user.routes";
import { handleNotFound } from "./utils/handle-not-found";
import { handleServerError } from "./utils/handle-server-error";
import { logRequestInfo } from "./utils/log-request-info";

getEnvironmentVariables();

const app = express();
app.use(json());

const port = process.env.PORT;
const host = process.env.HOST;

app.use(logRequestInfo);

app.use("/auth", userRouter);

app.use(handleNotFound);

app.use(handleServerError);
app.listen(port, () => logger.info(`Listening on ${host}:${port}`));
