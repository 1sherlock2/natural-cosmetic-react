import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

class NavbarContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Navbar stocks={this.props.stocks}
									 korea={this.props.korea}
									 perfumery={this.props.perfumery}
									 makeup={this.props.makeup}
									 skincare={this.props.skincare}
									 men={this.props.men}
									 accessories={this.props.accessories}
									 kids={this.props.kids}
									 gift={this.props.gift}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		stocks: state.navData.stocks,
		korea: state.navData.korea,
		perfumery: state.navData.perfumery,
		makeup: state.navData.makeup,
		skincare: state.navData.skincare,
		men: state.navData.men,
		accessories: state.navData.accessories,
		kids: state.navData.kids,
		gift: state.navData.gift,
	}
}

export default connect(mapStateToProps,{})(NavbarContainer)