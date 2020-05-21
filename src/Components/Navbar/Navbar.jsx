import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
	return (
		<div className={s.navbar}>
			<ul className={s.ul}>
				<li className={s.li}>
					<NavLink to={'/stocks'}> Акции </NavLink>
				</li>
				<li>
					<NavLink to={'/korea'}> Korea </NavLink>
				</li>
				<li>
					<NavLink to={'/perfumery'}> Парфюмерия </NavLink>
				</li>
				<li>
					<NavLink to={'/makeup'}> Косметика </NavLink>
				</li>
				<li>
					<NavLink to={'/skincare'}> Уход за кожей </NavLink>
				</li>
				<li>
					<NavLink to={'/men'}> Мужчинам </NavLink>
				</li>
				<li>
					<NavLink to={'/accessories'}> Аксессуары </NavLink>
				</li>
				<li>
					<NavLink to={'/kids'}> Детям </NavLink>
				</li>
				<li>
					<NavLink to={'/gift'}> Для подарка </NavLink>
				</li>
			</ul>
		</div>
	)
}
export default Navbar;