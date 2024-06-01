'use client'
import { configureStore } from "@reduxjs/toolkit";
import { select_playlist } from "./playlistSlice";




export const store=configureStore({
  reducer: select_playlist
})

