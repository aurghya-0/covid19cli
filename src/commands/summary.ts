import { URL } from "../server-config";
import { Command, flags } from "@oclif/command";
import axios from "axios";
import Table = require("cli-table3");

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
  };

  async run() {
    const table = new Table();
    const summary: any = await axios({
      method: "GET",
      url: `${URL}/summary`,
    });

    const date: string = new Date(summary.data["Date"]).toDateString();
    const global: CovidData = summary.data["Global"];
    table.push(
      [{ content: "Global Summary", colSpan: 3, hAlign: "center" }],
      ["Total Affected", "Total Recovered", "Total Dead"],
      [
        global.TotalConfirmed.toLocaleString(),
        global.TotalRecovered.toLocaleString(),
        global.TotalDeaths.toLocaleString(),
      ],
      [
        { content: "New Confirmed", colSpan: 1 },
        {
          content: global.NewConfirmed.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [
        { content: "New Recovered", colSpan: 1 },
        {
          content: global.NewRecovered.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [
        { content: "New Deaths", colSpan: 1 },
        {
          content: global.NewDeaths.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [{ content: `Last Updated ${date}`, colSpan: 3, hAlign: "center" }]
    );

    this.log(`${table.toString()}`);
  }
}
