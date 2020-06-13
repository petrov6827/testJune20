import React from 'react';
import style from './Header.module.scss';
import {ReactComponent as Zigzag} from '../../assets/images/zigzag.svg';

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.head}>Матч Lucid Dream vs Astro</div>
      <div className={style.changebet}>
        <Zigzag className={style.zigzag}/>
        <p className={style.grafiktext}>График изменения ставок</p>
      </div>
    </div>
  );
};

