import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "../slices/player.slice"
import propertiesReducer from "../slices/proprietes.slice"

export const store = configureStore({
	reducer: {
		PlayerState: playerReducer,
		propertiesReducer: propertiesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
