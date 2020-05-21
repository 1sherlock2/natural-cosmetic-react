let initialState = {
	stocks: 'stocks',
	korea: 'korea',
	perfumery: 'perfumery',
	makeup: 'makeup',
	skincare: 'skincare',
	men: 'men',
	accessories: 'accessories',
	kids: 'kids',
	gift: 'gift'
}

let navReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default navReducer