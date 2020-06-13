import React from 'react';
import style from './CompareTeams.module.scss';
import { ReactComponent as Riders } from '../../assets/images/riders.svg';
import { ReactComponent as Flames } from '../../assets/images/flames.svg';

export const CompareTeams = () => {
  const leftteam = 'Unique Flames';
  const rightteam = 'Movistar Riders';
  return (
    <div className={style.compareteams}>
      <div className={style.compare__leftteam}>
        <p className={style.team__name}>{leftteam}</p>
        <Flames className={style.leftteam__img} />
      </div>
      <div className={style.compare__centerblock}>
        <p className={style.compare__header}>Сравнить команды</p>
        <p className={style.text}>52%<span className={style.compare__system}>BO3</span>48%</p>
        <p className={style.text}> 40%<span className={style.compare__system}>BO3</span>60%</p>
        <div className={style.lefttriangle}></div>
        <div className={style.righttriangle}></div>
      </div>
      <div className={style.compare__rightteam}>
        <Riders className={style.rightteam__img} />
        <p className={style.team__name}>{rightteam}</p>
      </div>
    </div>
  );
};
