import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";


export const AuthRedirectComponent = (Component) => {
	let mapStateToPropsFromRedirect = (state) => {
		return {
			...state,
			isAuth: state.authData.isAuth,
		}
	}

	class RedirectComponent extends React.Component {
		constructor(props) {
			super(props);
		}
		render() {
			// if (!this.props.isAuth)	return <Redirect to={'/login'} />
			return <Component {...this.props} />
		}
	}
	let ComponentAuthRedirect = connect(mapStateToPropsFromRedirect)(RedirectComponent);
	return ComponentAuthRedirect;
}