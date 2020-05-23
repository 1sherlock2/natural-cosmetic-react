import React from 'react';
import './App.module.css';
import HeadersContainer from "./Components/Headers/HeadersContainer";
import s from "./App.module.css"
import UnHeaderContainer from "./Components/UnHeader/UnHeaderContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import StocksContainer from "./Components/Stocks/StocksContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import KoreaContainer from "./Components/Korea/KoreaContainer";
import PerfumeryContainer from "./Components/Perfumery/PerfumeryContainer";
import MakeUpContainer from "./Components/MakeUp/MakeUpContainer";
import SkinCareContainer from "./Components/SkinCare/SkinCareContainer";
import MenContainer from "./Components/Men/MenContainer";
import AccessoriesContainer from "./Components/Accessories/AccessoriesContainer";
import KidsContainer from "./Components/Kids/KidsContainer";
import GiftContainer from "./Components/GIft/GiftContainer";
import AuthContainer from "./Components/Auth/AuthContainer";
import {connect} from "react-redux";
import {useRoutes} from "./Routes/Route";


const App = () => {
	const routes = useRoutes(true);
	return (
		<div className={s.container}>
			{routes}
		</div>
	)
}
export default App


// class App extends React.Component {
// 	render() {
// 	const routes = useRoutes(this.props.authData.isAuth)
// 		return (
// 			<div className={s.app}>
// 				{routes}
// 			</div>
// 		)
// 	}
// }
//
// let mapStateToProps = (state) => {
// 	return {
// 		...state,
// 		isAuth: state.authData.isAuth,
// 	}
// }
//
// export default connect(mapStateToProps, {})(App);
