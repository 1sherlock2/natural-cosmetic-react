import React from "react";
import s from "./Perfumery.module.css";


const Perfumery = (props) => {
	return (
		<div className={s.perfumery}>
			<h1> {props.perfumery}</h1>
		</div>
	)
}

export default Perfumery