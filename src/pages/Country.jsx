import React, { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../Api/postApi";
import Loader from "../components/UI/Loader";
import CountryCatrd from "../components/Layout/CountryCatrd";
import {SearchFilter} from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");  
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // Search Logic 
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  // Filter Logic
  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  // Apply both search and filter
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => (
          <CountryCatrd country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
export default Country;
