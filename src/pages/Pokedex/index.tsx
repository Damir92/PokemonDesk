import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';

import pokemons from '../../pokemons';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <Heading level={3}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.grid}>
          {pokemons.map((item) => (
            <div key={item.id} className={s.item}>
              {item.name}
              <img src={item.img} alt="{item.name}" className={s.img} />
            </div>
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
