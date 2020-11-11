import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  data: {
    name: string;
    img: string;
    stats: {
      attack: string;
      defense: string;
    };
    types: string[];
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading className={s.titleName} capitalize level={5}>
          {data.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {data.types.map((item) => (
            <span key={item} className={s.label}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
