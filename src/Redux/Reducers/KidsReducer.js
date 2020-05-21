let initialState = {
	kids: 'Kids',
}

let kidsReducer = (state=initialState, action)  => {
	return {
		...state,
	}
}

export default kidsReducer;