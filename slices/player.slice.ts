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
		addPlayer: (
			state: PlayerState,
			action: PayloadAction<{ name: string; gorgées: number }>,
		) => {
			let id = state.players.length
			let name = action.payload.name
			let color = genereateRandomColor()
			let position = 0
			let gorgées = action.payload.gorgées
			let possesion: number[] = []
			state.players.push({ id, name, position, color, possesion, gorgées })
			return state
		},
		resetPlayers: (state: PlayerState) => {
			state.players = []
			state.currentPlayer = 0
			return state
		},
		playerBuyTile: (state: PlayerState, action: PayloadAction<number>) => {
			state.players[state.currentPlayer].possesion.push(action.payload)
			state.players[state.currentPlayer].gorgées -= 1
			return state
		},
		playerMoove: (state: PlayerState, action: PayloadAction<number>) => {
			state.players[state.currentPlayer].position = action.payload
			return state
		},
		playerBuyBuild: (state: PlayerState, action: PayloadAction<number>) => {
			state.players[state.currentPlayer].gorgées -= action.payload
			return state
		},
		playerDrink: (
			state: PlayerState,
			action: PayloadAction<{ ownerId: number; gorgées: number }>,
		) => {
			state.players[action.payload.ownerId].gorgées += action.payload.gorgées
			state.players[state.currentPlayer].gorgées -= action.payload.gorgées
			return state
		},
		nextPlayer: (state: PlayerState) => {
			state.currentPlayer += 1
			if (state.currentPlayer >= state.players.length) {
				state.currentPlayer = 0
			}
			return state
		},
	},
})

const { actions, reducer } = playerSlice

export const {
	addPlayer,
	resetPlayers,
	playerBuyTile,
	playerMoove,
	playerBuyBuild,
	playerDrink,
	nextPlayer,
} = actions

export default reducer
