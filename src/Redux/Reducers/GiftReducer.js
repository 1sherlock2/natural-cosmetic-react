let initialState = {
	gift: 'Gift',
}

let giftReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default  giftReducer