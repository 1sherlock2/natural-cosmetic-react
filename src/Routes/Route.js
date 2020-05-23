import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import s from "../App.module.css";
import AuthContainer from "../Components/Auth/AuthContainer";
import HeadersContainer from "../Components/Headers/HeadersContainer";
import UnHeaderContainer from "../Components/UnHeader/UnHeaderContainer";
import NavbarContainer from "../Components/Navbar/NavbarContainer";
import StocksContainer from "../Components/Stocks/StocksContainer";
import KoreaContainer from "../Components/Korea/KoreaContainer";
import PerfumeryContainer from "../Components/Perfumery/PerfumeryContainer";
import MakeUpContainer from "../Components/MakeUp/MakeUpContainer";
import SkinCareContainer from "../Components/SkinCare/SkinCareContainer";
import MenContainer from "../Components/Men/MenContainer";
import AccessoriesContainer from "../Components/Accessories/AccessoriesContainer";
import KidsContainer from "../Components/Kids/KidsContainer";
import GiftContainer from "../Components/GIft/GiftContainer";


export const useRoutes = (auth) => {
	if (!auth) {
		return (
			<Switch>
				<div className={s.register}>
					<Redirect to='/login'/>
					<Route path='/login' render={() => <AuthContainer/>}/>
				</div>
			</Switch>
		)
	}
	return (
		<Switch>
			<Route path={'/'}>
				<div className={s.app}>
					<div className={s.header}>
						<HeadersContainer/>
					</div>
					<div className={s.unheader}>
						<UnHeaderContainer/>
					</div>
					<div className={s.navbar}>
						<NavbarContainer/>
					</div>
					<div className={s.content}>
						<Route path={'/stocks'} render={() => <StocksContainer/>}/>
						<Route path={`/korea`} render={() => <KoreaContainer/>}/>
						<Route path={`/perfumery`} render={() => <PerfumeryContainer/>}/>
						<Route path={`/makeup`} render={() => <MakeUpContainer/>}/>
						<Route path={`/skincare`} render={() => <SkinCareContainer/>}/>
						<Route path={`/men`} render={() => <MenContainer/>}/>
						<Route path={`/accessories`} render={() => <AccessoriesContainer/>}/>
						<Route path={`/kids`} render={() => <KidsContainer/>}/>
						<Route path={`/gift`} render={() => <GiftContainer/>}/>
						{/*  <Route path={`/brends`} render={ () => <BrendsContainer />} />*/}
					</div>
					<div className={s.footer}>
						{/*<Footer />*/}
					</div>
				</div>
			</Route>
		</Switch>
	)
}