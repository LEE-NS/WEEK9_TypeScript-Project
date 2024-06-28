import { PrintedCountry } from "../types/country.type";

interface CountryCardProps {
  countries: PrintedCountry[];
  setCountries: React.Dispatch<React.SetStateAction<PrintedCountry[]>>;
  country: PrintedCountry;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  countries,
  setCountries,
}: CountryCardProps): JSX.Element => {
  const handleFavorite = (id: PrintedCountry["id"]): void => {
    const updatedCountries: PrintedCountry[] = countries.map((eachCountry) =>
      id === eachCountry.id
        ? { ...eachCountry, isFav: !eachCountry.isFav }
        : eachCountry
    );
    setCountries(updatedCountries);
  };

  return (
    <li
      onClick={() => handleFavorite(country.id)}
      className="border p-3 h-40 w-72 flex flex-col justify-center items-center text-center gap-1 rounded-lg bg-slate-100 hover:bg-slate-300 transition cursor-pointer"
    >
      <img className="w-20" src={country.flag} />
      <h3 className="font-bold text-lg text-ellipsis">{country.name}</h3>
      <p className="text-sm">{country.capital}</p>
    </li>
  );
};

export default CountryCard;
