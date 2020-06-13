import React from 'react';
import style from './Mainbet.module.scss';
import { Leftteam } from './Leftteam/Leftteam';
import { Rightteam } from './Rightteam/Rightteam';
import { Scoreblock } from './Scoreblock/Scoreblock';

export const Mainbet = () => {
  return (
    <div className={style.betblock}>
      <Leftteam />
      <Scoreblock />
      <Rightteam />
    </div>
  );
};
