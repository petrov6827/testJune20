import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Fatesvg } from '../../../assets/images/fate.svg';

export const Fate = () => {
  const team = ' FATE';
  const date = '21.03.2019';
  const leftscore = 5;
  const rightscore = 3;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__win}></div>
      <div className={style.vs__teamimg}>
        <Fatesvg className={style.vs__teamsvg} />
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
