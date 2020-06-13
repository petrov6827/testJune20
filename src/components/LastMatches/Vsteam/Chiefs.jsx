import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Chiefssvg } from '../../../assets/images/chiefs.svg';

export const Chiefs = () => {
  const team = ' Chiefs';
  const date = '26.03.2019';
  const leftscore = 2;
  const rightscore = 0;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__win}></div>
      <div className={style.vs__teamimg}>
        <Chiefssvg className={style.vs__teamsvg} />
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
