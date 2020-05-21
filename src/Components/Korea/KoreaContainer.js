import React from "react";
import {connect} from "react-redux";
import Korea from "./Korea";

class KoreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Korea korea={this.props.korea} />
	}
}

let mapStateToProps = (state) => {
	return {
		korea:state.koreaData.korea
	}
}

export default connect(mapStateToProps, {})(KoreaContainer)