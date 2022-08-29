import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState ={
    posts: [],
    status: 'idle',
    error:null
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
})