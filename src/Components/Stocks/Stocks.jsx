import React from "react";
import s from "./Stocks.module.css";


const Stocks = (props) => {
	return (
		<div className={s.stocks}>
			<h1> {props.stocks} </h1>
		</div>
	)
}

export default Stocks;