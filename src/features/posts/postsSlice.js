import {createSlice} from '@reduxjs/toolkit';

const initialState = [
{id: '1', title: 'First Post', content: 'Hello'},
{id: '2', title: 'Second Post', content: 'More text'}
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.push(action.payload)
		},
		prepare(title, content){
			return{
				payload: {
					id: nanoid(),
					title,
				  content
				}
			}
		}
		postUpdated(state, action){
			const {id, title, content} = action.payload
const existingPost = state.find(post=>post.id===id)
  id(existingPost){
  	     existingPost.title = title
  	     existingPost.content = content
		}
      }
	}
})
export const {postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer