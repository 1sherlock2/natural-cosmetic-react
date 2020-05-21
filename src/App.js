import React from 'react';
import './App.module.css';
import HeadersContainer from "./Components/Headers/HeadersContainer";
import s from "./App.module.css"
import UnHeaderContainer from "./Components/UnHeader/UnHeaderContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import StocksContainer from "./Components/Stocks/StocksContainer";
import {Route} from "react-router-dom";
import KoreaContainer from "./Components/Korea/KoreaContainer";
import PerfumeryContainer from "./Components/Perfumery/PerfumeryContainer";
import MakeUpContainer from "./Components/MakeUp/MakeUpContainer";
import SkinCareContainer from "./Components/SkinCare/SkinCareContainer";
import MenContainer from "./Components/Men/MenContainer";
import AccessoriesContainer from "./Components/Accessories/AccessoriesContainer";
import KidsContainer from "./Components/Kids/KidsContainer";
import GiftContainer from "./Components/GIft/GiftContainer";

const App = () =>  {
  return (
    <div className={s.app}>
      <div className={s.header}>
        <HeadersContainer />
      </div>
      <div className={s.unheader}>
        <UnHeaderContainer />
      </div>
      <div className={s.navbar}>
        <NavbarContainer />
      </div>
      <div className={s.content}>
        <Route path={'/stocks'} render={ () => <StocksContainer />} />
        <Route path={`/korea`} render={ () => <KoreaContainer />} />
        <Route path={`/perfumery`} render={ () => <PerfumeryContainer />} />
        <Route path={`/makeup`} render={ () => <MakeUpContainer />} />
        <Route path={`/skincare`} render={ () => <SkinCareContainer />} />
        <Route path={`/men`} render={ () => <MenContainer />} />
        <Route path={`/accessories`} render={ () => <AccessoriesContainer />} />
        <Route path={`/kids`} render={ () => <KidsContainer />} />
          <Route path={`/gift`} render={ () => <GiftContainer />} />
        {/*  <Route path={`/brends`} render={ () => <BrendsContainer />} />*/}
      </div>
      <div className={s.footer}>
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
