import React from 'react';
// import logo from './logo.svg';
import './App.module.scss';
import style from './App.module.scss';
import {Header} from './components/Header/Header';
import {Title} from './components/Title/Title';
import {Mainbet} from './components/Mainbet/Mainbet';
import {CompareTeams} from './components/CompareTeams/CompareTeams';
import {LastMatches} from './components/LastMatches/LastMatches';

function App() {
  return (
      <div className={style.container}>
        <div className={style.app}>
          <Header />
          <Title />
          <Mainbet />
          <CompareTeams />
          <LastMatches />
          {/* <Route
            className={s.links} path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path="/login" render={() => <Login />} /> */}
        </div>
      </div>
    );
}

export default App;
