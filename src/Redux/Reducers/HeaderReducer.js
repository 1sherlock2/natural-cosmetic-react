
let initialState = {
	nameCompany: 'Natural-cosmetic',
	logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fnatural-cosmetics&psig=AOvVaw2bcfh8PPYSssFZkErLcDau&ust=1589793607551000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICM0-_IuukCFQAAAAAdAAAAABAD',
	isAuth: false,

}

let headerReducer = (state=initialState, action) => {
	return {
		...state,
	}
}

export default headerReducer
