import React from "react";
import {combineReducers, createStore} from "redux";
import headerReducer from "../Reducers/HeaderReducer";
import unHeaderReducer from "../Reducers/UnHeaderReducer";
import navReducer from "../Reducers/NavbarReducer";
import stocksReducer from "../Reducers/StocksReducer";
import koreaReducer from "../Reducers/KoreaReducer";
import perfumeryReducer from "../Reducers/PerfumeryReducer";
import makeUpReducer from "../Reducers/MakeUpReducer";
import menReducer from "../Reducers/MenReducer";
import skinCareReducer from "../Reducers/SkinCareReducer";
import accessoriesReducer from "../Reducers/AccessoriesReducer";
import kidsReducer from "../Reducers/KidsReducer";
import giftReducer from "../Reducers/GiftReducer";
import authReducer from "../Reducers/AuthReducer";


let reducerPack = combineReducers({
	headerData: headerReducer,
	unHeaderData: unHeaderReducer,
	navData: navReducer,
	stocksData: stocksReducer,
	koreaData: koreaReducer,
	perfumeryDara: perfumeryReducer,
	makeUpData: makeUpReducer,
	skinCareData: skinCareReducer,
	menData: menReducer,
	accessoriesData: accessoriesReducer,
	kidsData: kidsReducer,
	giftData: giftReducer,
	// brendsData: brendsReducer,
	// footerData: footerReducer,
	authData: authReducer,
})

let store = createStore(reducerPack);

export default store;
