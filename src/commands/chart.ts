import { URL } from "../server-config";
import { Command, flags } from "@oclif/command";
import axios from "axios";
const blessed = require("blessed");
const contrib = require("blessed-contrib");
const screen = blessed.screen();

export type CovidData = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

export type CountrySummary = {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
};

export default class Chart extends Command {
  static description = "Plot a graph based on the data";

  static flags = {
    help: flags.help({ char: "h" }),
    country: flags.string({ char: "c", description: "Name of the country" }),
  };

  async run() {
    const { flags } = this.parse(Chart);
    const summary: any = await axios({
      method: "GET",
      url: `${URL}/summary`,
    });
    const global: CovidData = summary.data["Global"];

    if (flags.country) {
      const countries: CountrySummary[] = summary.data["Countries"];
      const country = countries.find((x) => {
        return x.Country.toLowerCase() === flags.country?.toLowerCase();
      });
      if (country) {
        const date: string = new Date(country["Date"]).toDateString();
        this.createChart(country, date, country.Country);
      }
    } else {
      const date: string = new Date(summary.data["Date"]).toDateString();
      this.createChart(global, date);
    }
  }

  createChart(
    country: CountrySummary | CovidData,
    date: string,
    countryName?: string
  ) {
    var grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

    //grid.set(row, col, rowSpan, colSpan, obj, opts)
    var bar = grid.set(0, 0, 12, 6, contrib.bar, {
      label: `${countryName ? countryName : "Global"} Summary (${date})`,
      barWidth: 20,
      barSpacing: 30,
      xOffset: 0,
      maxHeight: 9,
    });

    bar.setData({
      titles: ["Confirmed", "Recovered", "Dead"],
      data: [
        country.TotalConfirmed,
        country.TotalRecovered,
        country.TotalDeaths,
      ],
    });

    screen.key(["escape", "q", "C-c"], (ch: any, key: any) => {
      return process.exit(0);
    });

    screen.render();
  }
}
