import React from 'react';
import style from './WinDate.module.scss';

export const WinDate = () => {
  const dateofmatch = '21.02.2019';
  return (
    <div className={style.dateofmatch}>
      <div className={style.datetext}>{dateofmatch}</div>
    </div>
  );
};
