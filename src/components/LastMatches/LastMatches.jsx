import React from 'react';
import style from './LastMatches.module.scss';
import { Chiefs } from './Vsteam/Chiefs';
import { NoChance } from './Vsteam/NoChance';
import { Fate } from './Vsteam/Fate';
import { Tricked } from './Vsteam/Tricked';
import { Pro100 } from './Vsteam/Pro100';
import { Sprout } from './Vsteam/Sprout';
import { Hop } from './Vsteam/Hop';
import { Fnatic } from './Vsteam/Fnatic';
import { Chaos } from './Vsteam/Chaos';
import { WinDate } from './Date/WinDate';
import { LoseDate } from './Date/LoseDate';


export const LastMatches = () => {
  const leftteam = ' Unique Flames';
  const rightteam = ' Movistar Riders';

  return (
    <div className={style.lastmatches}>
      <div className={style.header}>
        <p className={style.leftteam}>Последние матчи {leftteam}</p>
        <p className={style.middleblock}>Личные встречи</p>
        <p className={style.rightteam}>Последние матчи {rightteam}</p>
      </div>
      <div className={style.table}>
        <div className={style.leftteam__vs}>
          <Chiefs />
          <NoChance />
          <Fate />
          <Tricked />
          <Pro100 />
        </div>
        <div className={style.date}>
          <WinDate />
          <LoseDate />
          <WinDate />
          <WinDate />
          <LoseDate />
        </div>
        <div className={style.rightteam__vs}>
          <Tricked />
          <Sprout />
          <Hop />
          <Fnatic />
          <Chaos />
        </div>
      </div>
    </div>
  );
};
