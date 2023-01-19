import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Player } from "../store/types/player"
import { genereateRandomColor } from "../utils/generateRandomColor"

const initialState: Player[] = []

const playerSlice = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {
		addPlayer: (state: Player[], action: PayloadAction<string>) => {
			let id = state.length
			let name = action.payload
			let color = genereateRandomColor()
			if (state.find((player) => player.name === name))
				throw new Error("Player name already exists")
			let position = 0
			state.push({ id, name, position, color })
			return state
		},
		resetPlayers: (state: Player[]) => {
			state = []
			return state
		},
	},
})

const { actions, reducer } = playerSlice

export const { addPlayer, resetPlayers } = actions

export default reducer
