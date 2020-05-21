import React from "react";
import s from "./UnHeader.module.css";

const UnHeader = (props) => {
	return (
		<div className={s.unheader}>
			<div className={s.phone}>
				{props.phone}
			</div>
			<div className={s.city}>
				{props.city}
			</div>
		</div>
	)
}

export default UnHeader;
