import React from 'react';
import style from '../Mainbet.module.scss';
import { ReactComponent as CSgo } from '../../../assets/images/csgo.svg';

export const Scoreblock = () => {
  return (
    <div className={style.score}>
      <div className={style.score__container}>
        <p className={style.score__system}>BO3</p>
        <p className={style.score__total}>3 : 0</p>
        <p className={style.score__date}>30 Aug 14:00 GMT-3</p>
      </div>
      <CSgo className={style.csgo__img} />
    </div>
  );
};
