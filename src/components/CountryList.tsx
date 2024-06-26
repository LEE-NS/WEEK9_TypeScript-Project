import { PrintedCountry } from "../types/country.type";
import CountryCard from "./CountryCard";

interface CountryListProps {
  listName: string;
  list: PrintedCountry[] | null;
  countries: PrintedCountry[];
  setCountries: React.Dispatch<React.SetStateAction<PrintedCountry[]>>;
}

const CountryList = ({
  listName,
  list,
  countries,
  setCountries,
}: CountryListProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl font-extrabold p-3">{listName}</h2>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex justify-center items-center flex-wrap gap-3 w-screen">
          {list?.map((country) => (
            <CountryCard
              key={country.name}
              country={country}
              countries={countries}
              setCountries={setCountries}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryList;
