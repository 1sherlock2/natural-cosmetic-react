import React from "react";
import {compose} from "redux";
import {AuthRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {connect} from "react-redux";
import Auth from "./Auth";
import {setUserThunk} from "../../Redux/Reducers/AuthReducer";


class AuthContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setUserThunk(this.props.userId, this.props.email, this.props.password)
	}

	render() {
		return <Auth isAuth={this.props.isAuth}/>
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authData.isAuth,
	}
}
export default connect(mapStateToProps, {setUserThunk})(AuthContainer)
