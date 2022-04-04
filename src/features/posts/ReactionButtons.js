import React from 'react'
import {useDispatch} from 'react-redux'
import {reactionAdded} from './postsSlice'

const reactionEmoji = {
	prosent: '1',
	baks: '$',
	jail: '#',
	dog: '@'
}

export const ReactionButtons = ({post})=>{
	const dispatch = useDispatch()
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji])=>{
	        	return(
             <button key={name} type="button"
   onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name})) }>
   	      {emoji} {post.reactions[name]}</button>
	        		)
                })
                return <div>{reactionButtons}</div>
                }
             
             
	      