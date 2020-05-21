import React from "react";
import s from "./SkinCare.module.css";

const SkinCare = (props) => {
	return (
		<div className={s.skinCare}>
			<h1> {props.skinCare}</h1>
		</div>
	)
}

export default SkinCare