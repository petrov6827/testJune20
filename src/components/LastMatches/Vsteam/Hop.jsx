import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Hopsvg } from '../../../assets/images/hop.svg';

export const Hop = () => {
  const team = ' HoP';
  const date = '05.04.2019';
  const leftscore = 9;
  const rightscore = 2;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__win}></div>
      <div className={style.vs__teamimg}>
        <Hopsvg className={style.vs__teamsvg} />
      </div>
      <p className={style.vs__teamname}>vs{team}</p>
      <p className={style.vs__teamdate}>{date}</p>
      <div className={style.vs__score}>
        <p className={style.leftscore}>{leftscore}</p>
        <p className={style.colon}>:</p>
        <p className={style.rightscore}>{rightscore}</p>
      </div>
    </div>
  );
};
