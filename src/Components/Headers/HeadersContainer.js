import React from "react";
import {connect} from "react-redux";
import Header from "./Header";

class HeadersContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Header nameCompany={this.props.nameCompany}
									 logo={this.props.logo}
						/>
	}
}
const mapStateToProps = (state) => {
	return {
		nameCompany: state.headerData.nameCompany,
		logo: state.headerData.logo,
	}
}

export default connect(mapStateToProps,{})(HeadersContainer)