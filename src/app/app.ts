import { Logger, getLogger } from "log4js";
import { Service } from "typedi";
//
import { Config } from "./config";

@Service()
export class App {
  private readonly logger: Logger;

  constructor(private readonly config: Config) {
    this.logger = getLogger("App");
  }

  async run(): Promise<void> {
    this.logger.info("Hello " + this.config.getWho() + "!");
  }
}
