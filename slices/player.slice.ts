import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PlayerState } from "../store/types/player"
import { genereateRandomColor } from "../utils/generateRandomColor"

const initialState: PlayerState = {
	players: [],
	currentPlayer: 0,
}

const playerSlice = createSlice({
	name: "PlayerState",
	initialState: initialState,
	reducers: {
		addPlayer: (state: PlayerState, action: PayloadAction<string>) => {
			let id = state.players.length
			let name = action.payload
			let color = genereateRandomColor()
			let position = 0
			let possesion: number[] = []
			state.players.push({ id, name, position, color, possesion })
			return state
		},
		resetPlayers: (state: PlayerState) => {
			state.players = []
			state.currentPlayer = 0
			return state
		},
		playerBuyTile: (state: PlayerState, action: PayloadAction<number>) => {
			state.players[state.currentPlayer].possesion.push(action.payload)
		},
	},
})

const { actions, reducer } = playerSlice

export const { addPlayer, resetPlayers, playerBuyTile } = actions

export default reducer
