import React from 'react';
import { A } from 'hookrouter';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading level={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button>
            <A href="/pokedex">See pokemons</A>
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
