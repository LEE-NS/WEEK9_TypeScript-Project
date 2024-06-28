import axios, { AxiosInstance } from "axios";
import { Country, PrintedCountry } from "../types/country.type";

const instance: AxiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async (): Promise<Country[]> => {
  const { data } = await instance.get<Country[]>("/all");
  return data as Country[];
};

export const extractedCountries = async () => {
  try {
    const data: Country[] = await getCountries();
    const printedCountries: PrintedCountry[] = data.map(
      (country: Country): PrintedCountry => {
        return {
          id: crypto.randomUUID(),
          flag: country.flags.svg,
          name: country.name.common,
          capital: country.capital ? country.capital[0] : "N/A",
          isFav: false,
        };
      }
    );
    return printedCountries as PrintedCountry[];
  } catch (error) {
    console.log(error);
  }
};
