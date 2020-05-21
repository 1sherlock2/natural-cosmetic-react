import React from "react";
import {connect} from "react-redux";
import Perfumery from "./Perfumery";

class PerfumeryContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Perfumery perfumery={this.props.perfumery} />
	}
}

let mapStateToProps = (state) => {
	return {
		perfumery: state.perfumeryDara.perfumery,
	}
}

export default connect(mapStateToProps, {})(PerfumeryContainer)