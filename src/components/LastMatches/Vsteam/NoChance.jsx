import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Nochancesvg } from '../../../assets/images/nochance.svg';

export const NoChance = () => {
  const team = ' NoChance';
  const date = '25.03.2019';
  const leftscore = 0;
  const rightscore = 1;
  return (
    <div className={style.vs__team}>
      <div className={`${style.vs__lose} ${style.vs__lose__nochance}`}></div>
      <div className={style.vs__teamimg}>
        <Nochancesvg className={style.vs__teamsvg} />
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
