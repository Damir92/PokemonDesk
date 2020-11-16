import React from 'react';
import { A } from 'hookrouter';

import { LinkEnum } from '../../routes';

import s from './NotFound.module.scss';

import Team from './assets/Team.png';

import Button from '../../components/Button';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        404
        <img src={Team} alt="Team" />
      </div>
      <p className={s.description}>
        <span className={s.white}>The rocket team </span>
        <span className={s.black}>has won this time.</span>
      </p>
      <Button yellow>
        <A href={LinkEnum.HOME}>Return</A>
      </Button>
    </div>
  );
};

export default NotFound;
