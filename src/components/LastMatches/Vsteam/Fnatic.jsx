import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Fnaticsvg } from '../../../assets/images/fnatic.svg';

export const Fnatic = () => {
  const team = ' Fnatic';
  const date = '30.03.2019';
  const leftscore = 7;
  const rightscore = 5;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__win}></div>
      <div className={style.vs__teamimg}>
        <Fnaticsvg className={style.vs__teamsvg} />
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
