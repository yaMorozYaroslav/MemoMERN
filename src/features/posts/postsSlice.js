import {createSlice} from '@reduxjs/toolkit'

const initialState = []
 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{
        postAdded(state, action){
            state.push(action.payload)
        },
        postUpdated(state, action){
            const {id, title, content} = action.payload
            const existingPost = state.find(
                                 post=>post.id===id)
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
 })
 export const {postAdded} = postsSlice.actions

 export default postsSlice.reducer