const initialState = {
	posts: [],
	loading: true,
	postId: null
}

const reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case 'POSTS_REQUESTED':
			return {
				posts: [],
				loading: true,
				postId: null
			}
		case 'POSTS_LOADED':
			return {
				posts: action.data,
				loading: false,
				postId: null
			}
		case 'COMMENTS_REQUESTED':
			return {
				posts: state.data,
				loading: true,
				postId: null
			}
		case 'COMMENTS_LOADED':
			state.posts.forEach((item) => {
				if (item.id === action.data.id) {
					item.comments = action.data.comments;
				}
			});
			console.log(action.data.id)
			return {
				posts: state.posts,
				loading: false,
				postId: action.data.id
			}
		case 'POST_OPEN':

			return {
				posts: state.posts,
				loading: false,
				postId: action.postId
			}
		default:
			return state;
	}
}

export default reducer;
