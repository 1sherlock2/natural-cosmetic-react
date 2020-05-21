import React from "react";
import {connect} from "react-redux";
import Gift from "./Gift";

class GiftContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return <Gift gift={this.props.gift} />
	}
}

let mapStateToProps = (state) => {
	return {
		gift: state.giftData.gift
	}
}

export default connect(mapStateToProps, {})(GiftContainer)

