import React from "react";
import s from "./Men.module.css";

const Men = (props) => {
	return (
		<div className={s.men}>
			<h1> {props.men} </h1>
		</div>
	)
}

export default Men