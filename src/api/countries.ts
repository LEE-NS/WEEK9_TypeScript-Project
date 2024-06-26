import axios, { AxiosInstance } from "axios";
import { Country, PrintedCountry } from "../types/country.type";

const instance: AxiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async (): Promise<Country[]> => {
  const { data } = await instance.get<Country[]>("/all");
  return data as Country[];
};

export const UpdatedGetCountries = async (): Promise<PrintedCountry[]> => {
  const data: Country[] = await getCountries();
  const printedCountries: PrintedCountry[] = data.map(
    (country: Country): PrintedCountry => {
      return {
        id: crypto.randomUUID(),
        flag: country.flags.png,
        name: country.name.common,
        capital: country.capital ? country.capital[0] : "N/A",
        isFav: false,
      };
    }
  );
  return printedCountries as PrintedCountry[];
};
