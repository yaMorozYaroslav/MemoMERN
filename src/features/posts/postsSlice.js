import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'

const initialState = [
{id:0, title: 'sero', content: 'nothing'}]
 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{
        postAdded(state, action){
            state.push(action.apyload)
        },
        postUpdated(state, action){
            const {id, title, content} = action.payload
            const existingPost = state.find(post=>post.id===id)
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
 })
 export const {postAdded, postUpdated} = postsSlice.actions

 export default postsSlice.reducer