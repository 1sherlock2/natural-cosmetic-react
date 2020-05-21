import React from "react";
import {connect} from "react-redux";
import MakeUp from "./MakeUp";

class MakeUpContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <MakeUp makeUp={this.props.makeUp} />
	}
}
let mapStateToProps = (state) => {
	return {
		makeUp: state.makeUpData.makeUp,
	}
}

export default connect(mapStateToProps, {})(MakeUpContainer)