import React from "react";
import {compose} from "redux";
import {AuthRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {connect} from "react-redux";


class AuthContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Auth />
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authData.isAuth,
	}
}
export default compose(connect(mapStateToProps, {}),AuthRedirectComponent)(AuthContainer)
