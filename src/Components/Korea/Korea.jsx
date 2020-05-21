import React from "react";
import s from "./Korea.module.css";



const Korea = (props) => {
	return (
		<div className={s.korea}>
			<h1> {props.korea} </h1>
		</div>
	)
}

export default Korea;