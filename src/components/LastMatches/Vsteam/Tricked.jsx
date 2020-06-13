import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Trickedsvg } from '../../../assets/images/tricked.svg';

export const Tricked = () => {
  const team = ' Tricked';
  const date = '26.03.2019';
  const leftscore = 3;
  const rightscore = 6;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__lose}></div>
      <div className={style.vs__teamimg}>
        <Trickedsvg className={style.vs__teamsvg} />
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
