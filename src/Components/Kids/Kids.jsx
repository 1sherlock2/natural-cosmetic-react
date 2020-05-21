import React from "react";
import s from "./Kids.module.css";

const Kids = (props) => {
	return (
		<div className={s.kids}>
			<h1>
				{props.kids}
			</h1>
		</div>
	)
}

export default Kids