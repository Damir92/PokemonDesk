import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

interface PokemonCardProps {
  name: string;
  img: string;
  stats: {
    attack: string;
    defense: string;
  };
  types: string[];
}

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading level={3}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.grid}>
          {data.pokemons.map((item: PokemonCardProps) => (
            <PokemonCard key={item.name} data={item} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
