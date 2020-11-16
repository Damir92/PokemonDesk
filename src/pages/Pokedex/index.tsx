import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

interface PokemonCardProps {
  name: string;
  img: string;
  stats: {
    attack: string;
    defense: string;
  };
  types: string[];
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((s) => ({
      ...s,
      name: evt.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={s.root}>
      {isLoading && <div className={s.loading}>Loading...</div>}
      <Layout className={s.contentWrap}>
        <Heading level={3}>
          {!isLoading && data.total} <b>Pokemons</b> for you to choose your favorite
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
          {!isLoading && data.pokemons.map((item: PokemonCardProps) => <PokemonCard key={item.name} data={item} />)}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
