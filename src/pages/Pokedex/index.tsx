import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>Content</Layout>
      <Footer />
    </div>
  );
};

export default Home;
