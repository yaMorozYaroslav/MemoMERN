import {createSlice} from '@reduxjs/toolkit'

const initialState = [
   {id: '0', name: 'Tianna'},
   {id: '1', name: 'Kevin'}
]

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {}
})
export default usersSlice.reducer