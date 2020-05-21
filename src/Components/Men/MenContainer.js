import React from "react";
import {connect} from "react-redux";
import Men from "./Men";

class MenContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Men men={this.props.men} />
	}
}
let mapStateToProps = (state) => {
	return {
		men: state.menData.men
	}
}

export default connect(mapStateToProps, {})(MenContainer)