import React from "react";
import {connect} from "react-redux";
import Kids from "./Kids";

class KidsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Kids kids={this.props.kids}/>
	}
}

let mapStateToProps = (state) => {
	return {
		kids: state.kidsData.kids,
	}
}

export default connect(mapStateToProps, {})(KidsContainer)