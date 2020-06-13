import React from 'react';
import style from '../Mainbet.module.scss';
import {ReactComponent as Wincup} from '../../../assets/images/wincup.svg';
import { ReactComponent as Lucide } from '../../../assets/images/lucide.svg';

export const Leftteam = () => {
  return (
    <div className={`${style.team} ${style.leftteam}`}>
    <div className={`${style.team__info} ${style.team__infoleft}`}>
        <div className={style.team__textblock}>
        <p className={style.textblock__moneyforwin}>714 292 P</p>
        <p className={style.textblock__koeff}>88% * x1.12</p>
        </div>
        <Lucide className={style.leftteam__img} />
    </div>
    <button className={style.team__bet}>
        <p className={style.bet__win}>Lucide Dream</p>
        <p className={style.text}>на победу в матче</p>
        <Wincup className={style.wincup__img} />
    </button>
    </div>
  )
}