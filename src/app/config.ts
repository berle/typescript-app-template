import { Service } from "typedi";

@Service()
export class Config {
  getWho(): string {
    return process.env.APP_WHO || "world";
  }
}
