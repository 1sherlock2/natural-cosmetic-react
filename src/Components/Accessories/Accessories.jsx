import React from "react";
import s from "./Accessories.module.css";


const Accessories = (props) => {
	return (
		<div className={s.accessories}>
			<h1> {props.accessories} </h1>
		</div>
	)
}

export default Accessories