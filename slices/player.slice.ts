import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Player } from "../store/types/player"

const initialState: Player[] = []

const playerSlice = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {
		addPlayer: (state: Player[], action: PayloadAction<string>) => {
			let id = state.length
			let name = action.payload
			if (state.find((player) => player.name === name))
				throw new Error("Player name already exists")
			let position = 0
			state.push({ id, name, position })
			return state
		},
	},
})

const { actions, reducer } = playerSlice

export const { addPlayer, updatePlayer } = actions

export default reducer
