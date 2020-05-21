import React from "react";
import s from "./Gift.module.css";

const Gift = (props) => {
	return (
		<div className={s.gift}>
			<h1> {props.gift}</h1>
		</div>
	)
}

export default Gift