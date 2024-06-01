'use client'
import { createSlice } from "@reduxjs/toolkit";



export const playlistSlice=createSlice({
  name:"playlist",
  initialState:{
    selected_id: 0,
  },
  reducers: {
    select_playlist: (state, action) => {
      console.log(state);    
      
      state.selected_id = action.payload;
    },
  },
})

export const {select_playlist}=playlistSlice.actions