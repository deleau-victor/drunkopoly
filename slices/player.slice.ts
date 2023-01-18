import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Player } from "../store/types/player"

const initialState: Player[] = []

const playerSlice = createSlice({
	name: "player",
	initialState: initialState,
	reducers: {
		addPlayer: (state: Player[], action: PayloadAction<string>) => {
			let id = state.length
			let name = action.payload
			let position = 0
			state.push({ id, name, position })
			return state
		},
	},
})

const { actions, reducer } = playerSlice

export const { addPlayer } = actions

export default reducer
