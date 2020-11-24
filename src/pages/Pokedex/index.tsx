import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

import useData from '../../hook/useData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

interface IQuery {
  limit: number;
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: evt.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={s.root}>
      {isLoading && <div className={s.loading}>Loading...</div>}
      <Layout className={s.contentWrap}>
        <Heading level={3}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.inputWrap}>
          <input
            className={s.input}
            type="text"
            value={searchValue}
            placeholder="Encuentra tu pokémon..."
            onChange={handleSearchChange}
          />
        </div>
        <div className={s.grid}>
          {!isLoading &&
            data &&
            data.pokemons.map((item: PokemonsRequest) => <PokemonCard key={item.name} data={item} />)}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
