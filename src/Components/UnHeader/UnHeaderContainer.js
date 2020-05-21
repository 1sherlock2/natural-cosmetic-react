import React from "react";
import {connect} from "react-redux";
import UnHeader from "./UnHeader";


class UnHeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <UnHeader  phone={this.props.phone}
											city={this.props.city}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		phone: state.unHeaderData.phone,
		city: state.unHeaderData.city,
	}
}

export default connect(mapStateToProps,{})(UnHeaderContainer)