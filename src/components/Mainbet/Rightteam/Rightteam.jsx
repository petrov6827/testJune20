import React from 'react';
import style from '../Mainbet.module.scss';
import { ReactComponent as Windigo } from '../../../assets/images/windigo.svg';

export const Rightteam = () => {
  return (
    <div className={`${style.team} ${style.rightteam}`}>
      <div className={`${style.team__info} ${style.team__inforight}`}>
        <Windigo className={style.rightteam__img} />
        <div className={style.team__textblock}>
          <p className={style.textblock__moneyforwin}>53 360 P</p>
          <p
            className={`${style.textblock__koeff} ${style.textblock__koeffright}`}>
            x5.12 * 12%
          </p>
        </div>
      </div>
      <button className={style.team__bet}>
        <p className={style.bet__lose}>Windigo Gaming</p>
        <p className={style.text}>на победу в матче</p>
      </button>
    </div>
  );
};
