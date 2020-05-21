let initialState = {
	stocks: 'Stocks',
}

let stocksReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default stocksReducer