import React from "react";
import s from "./Auth.module.css";

const Auth = (props) => {
	return (
		<div className={s.auth}>
			<div className={s.auth_register}>
				<h1> Registration </h1>
			</div>
			<div className={s.auth_email}>
				<input placeholder='Your email' id='email' type='text'/>
				<label> Email </label>
				<div className={s.auth_password}>
					<input placeholder='Your password' id='password' type='password'/>
					<label> Password </label>
				</div>
			</div>
			<div className={s.auth_button}>
				<button className={s.entry_button}> Entry</button>
				<button className={s.register_button}> Register</button>
			</div>
		</div>
	)
}

export default Auth