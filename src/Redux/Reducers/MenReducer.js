let initialState = {
	men: 'Men',
}

let menReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default menReducer