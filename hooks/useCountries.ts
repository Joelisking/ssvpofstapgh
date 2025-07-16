import { useEffect, useState } from 'react';

export interface Country {
  name: string;
  dialCode: string;
  code: string;
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapped = data.map((country: any) => {
          const name = country.name.common;
          const code = country.cca2;
          let dialCode = '';
          if (
            country.idd &&
            country.idd.root &&
            country.idd.suffixes &&
            country.idd.suffixes.length > 0
          ) {
            dialCode = country.idd.root + country.idd.suffixes[0];
          }
          return { name, dialCode, code };
        });
        mapped.sort((a: Country, b: Country) =>
          a.name.localeCompare(b.name)
        );
        setCountries(mapped);
      } catch (error) {
        console.error('Error fetching countries', error);
      }
    };

    fetchCountries();
  }, []);

  return countries;
}
