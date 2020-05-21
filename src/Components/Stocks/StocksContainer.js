import React from "react";
import Stocks from "./Stocks";
import {connect} from "react-redux";

class StocksContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Stocks stocks={this.props.stocks}  />
	}
}

let mapStateToProps = (state) => {
	return {
		stocks: state.stocksData.stocks,
	}
}

export default connect(mapStateToProps,{})(StocksContainer)