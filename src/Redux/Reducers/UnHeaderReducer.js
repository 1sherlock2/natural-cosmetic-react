
let initialState = {
	phone: '+7(922)234-34-54',
	city: 'Moscow'
}

let unHeaderReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default unHeaderReducer;