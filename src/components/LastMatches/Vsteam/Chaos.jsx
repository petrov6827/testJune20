import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Chaossvg } from '../../../assets/images/chaos.svg';

export const Chaos = () => {
  const team = ' Chaos';
  const date = '02.05.2019';
  const leftscore = 4;
  const rightscore = 7;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__lose}></div>
      <div className={style.vs__teamimg}>
        <Chaossvg className={style.vs__teamsvg} />
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
