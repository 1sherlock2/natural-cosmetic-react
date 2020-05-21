import React from "react";
import SkinCare from "./SkinCare";
import {connect} from "react-redux";

class SkinCareContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <SkinCare skinCare={this.props.skinCare} />
	}
}

let mapStateToProps = (state) => {
	return {
		skinCare: state.skinCareData.skinCare,
	}
}

export default connect(mapStateToProps, {})(SkinCareContainer)