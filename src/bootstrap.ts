import "dotenv/config";
import "reflect-metadata";
import { Container } from "typedi";
import { configure, getLogger, Appender } from "log4js";
//
import { App } from "./app";

let logAppender: Appender = {
  type: "stdout",
};

const logTarget = process.env.LOG_TARGET;

if (logTarget) {
  logAppender = {
    type: "file",
    filename: logTarget,
  };
}

configure({
  appenders: {
    out: logAppender,
  },
  categories: {
    default: {
      appenders: ["out"],
      level: process.env.LOG_LEVEL || "debug",
    },
  },
});

async function boot(): Promise<void> {
  try {
    await Container.get<App>(App).run();
  } catch (error) {
    getLogger("bootstrap").error(error);
  }
}

boot();
