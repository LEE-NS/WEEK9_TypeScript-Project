import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import { PrintedCountry } from "./types/country.type";
import { UpdatedGetCountries } from "./api/countries";

const App = (): JSX.Element => {
  const [countries, setCountries] = useState<PrintedCountry[]>([]);

  const getFixedData = async () => {
    const fixedData: PrintedCountry[] = await UpdatedGetCountries();
    if (fixedData) {
      setCountries(fixedData);
    }
  };

  useEffect(() => {
    getFixedData();
  }, []);

  const selected: PrintedCountry[] | null = countries?.filter(
    (country) => country.isFav === true
  );
  const unselected: PrintedCountry[] | null = countries?.filter(
    (country) => country.isFav === false
  );

  return (
    <>
      <div className="w-screen flex flex-col gap-10">
        <CountryList
          listName="Favorite Countries"
          list={selected}
          countries={countries}
          setCountries={setCountries}
        />
        <CountryList
          listName="All Countries"
          list={unselected}
          countries={countries}
          setCountries={setCountries}
        />
      </div>
    </>
  );
};

export default App;
