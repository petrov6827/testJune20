import React from 'react';
import style from './../LastMatches.module.scss';
import { ReactComponent as Pro100svg } from '../../../assets/images/pro100.svg';

export const Pro100 = () => {
  const team = ' pro100';
  const date = '01.07.2019';
  const leftscore = 2;
  const rightscore = 7;
  return (
    <div className={style.vs__team}>
      <div className={style.vs__lose}></div>
      <div className={style.vs__teamimg}>
        <Pro100svg className={style.vs__teamsvg} />
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
