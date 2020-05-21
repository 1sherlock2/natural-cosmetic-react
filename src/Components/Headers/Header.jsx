import React from "react";
import s from "./Header.module.css";
import logo from "./../../Img/logo.jpg"

const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.logo}>
				<img src={logo} />
			</div>
			<div className={s.nameCompany}>
				<span> {props.nameCompany}  </span>
			</div>
			<div className={s.search}>
				<input type="search" />
				<button>Search</button>
			</div>
		</div>
	)
}

export default Header