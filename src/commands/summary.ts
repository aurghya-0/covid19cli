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

export default class Summary extends Command {
  static description = "Get the global summery of COVID-19";

  static flags = {
    help: flags.help({ char: "h" }),
    country: flags.string({ char: "c", description: "Name of the country" }),
  };

  async run() {
    const { flags } = this.parse(Summary);
    const summary: any = await axios({
      method: "GET",
      url: `${URL}/summary`,
    });

    if (flags.country) {
      const countries: CountrySummary[] = summary.data["Countries"];
      const country = countries.find((x) => {
        return x.Country.toLowerCase() === flags.country?.toLowerCase();
      });
      if (country) {
        const date: string = new Date(country["Date"]).toDateString();
        let table = this.createTable(country, date, country.Country);
        this.log(`${table}`);
      }
    } else {
      const date: string = new Date(summary.data["Date"]).toDateString();
      const global: CovidData = summary.data["Global"];
      let table = this.createTable(global, date);
      this.log(`${table}`);
    }
  }

  createTable(
    country: CountrySummary | CovidData,
    date: string,
    countryName?: string
  ) {
    const table = new Table();
    table.push(
      [
        {
          content: `${countryName ? countryName : "Global"} Summary`,
          colSpan: 3,
          hAlign: "center",
        },
      ],
      ["Total Affected", "Total Recovered", "Total Dead"],
      [
        country.TotalConfirmed.toLocaleString(),
        country.TotalRecovered.toLocaleString(),
        country.TotalDeaths.toLocaleString(),
      ],
      [
        { content: "New Confirmed", colSpan: 1 },
        {
          content: country.NewConfirmed.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [
        { content: "New Recovered", colSpan: 1 },
        {
          content: country.NewRecovered.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [
        { content: "New Deaths", colSpan: 1 },
        {
          content: country.NewDeaths.toLocaleString(),
          colSpan: 2,
          hAlign: "center",
        },
      ],
      [{ content: `Last Updated ${date}`, colSpan: 3, hAlign: "center" }]
    );

    return table.toString();
  }
}
