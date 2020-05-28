import { URL } from "../server-config";
import { Command, flags } from "@oclif/command";
import axios from "axios";

export type CovidData = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

export default class Summary extends Command {
  static description = "Get the global summery of COVID-19";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Summary);
    const summary = await axios({
      method: "GET",
      url: `${URL}/summary`,
    });
    const global: CovidData = summary.data["Global"];

    const name = flags.name ?? "world";
    this.log(
      `Affected : ${global.TotalConfirmed.toLocaleString()} \nRecovered : ${global.TotalRecovered.toLocaleString()} \nDead : ${global.TotalDeaths.toLocaleString()}`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
