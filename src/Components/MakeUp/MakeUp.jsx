import React from "react";
import s from "./MakeUp.module.css";

const MakeUp = (props) => {
	return (
		<div className={s.makeUp}>
			<h1> {props.makeUp} </h1>
		</div>
	)
}

export default MakeUp