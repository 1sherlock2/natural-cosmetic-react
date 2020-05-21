import React from "react";
import {connect} from "react-redux";
import Accessories from "./Accessories";

class AccessoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Accessories accessories={this.props.accessories} />
	}
}

let mapStateToProps = (state) => {
	return {
		accessories: state.accessoriesData.accessories,
	}
}

export default connect(mapStateToProps, {})(AccessoriesContainer)