import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import {client} from '../../api/client'

const initialState={
	posts: [],
	status: 'idle',
	error: null
}

export const fetchPosts = createAsyncThunk(
	         'posts/fetchPosts', async()=>{
	         	const response = await client.get('/fakeApi/posts')
	         	return response.data
	         })
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.posts.push(action.payload)
		},
		prepare(title, content, userId){
			return{
				payload: {
					id: nanoid(),
					title,
					content,
					user: userId 
			   		
			  }
			}
		  },
		  postUpdated(state, action){
		  	const {id, title, content} = action.payload
		  	const existingPost = state.posts.find(post=>post.id===id)
		  	if(existingPost){
		  		existingPost.title = title
		  		existingPost.content = content
		  	}
		  }
		}
	  
	})
  export const {postAdded,postUpdated} = postsSlice.actions
export default postsSlice.reducer

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (
	state, postId) => state.posts.posts.find(post=>post.id===postId)