export type Country = {
  altSpelling: [];
  area: number;
  capital: string[] | undefined;
  capitalInfo: {};
  car: {};
  cca2: string;
  cca3: string;
  ccn3: number;
  coatOfArms: {};
  continents: [];
  currencies: {};
  demonyms: {};
  flag: string;
  flags: {
    png: string;
  };
  idd: {};
  independent: boolean;
  landlocked: boolean;
  language: {};
  latlng: [];
  maps: {};
  name: {
    common: string;
  };
  population: number;
  postalCode: {};
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: [];
  tld: [];
  translation: {};
  unMember: boolean;
};

export type PrintedCountry = {
  id: string;
  flag: string;
  name: string;
  capital: string | undefined;
  isFav: boolean;
};
