import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'Ive heard good things'},
    {id: '2', title: 'Slices....', content: 'The more I say slice the more i want pizza'}
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {

    }
})

export default postsSlice.reducer