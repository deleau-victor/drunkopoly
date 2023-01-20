export interface Player {
	id: number
	name: string
	position: number
	color: string
}

export interface PlayerState {
	players: Player[]
	currentPlayer: Player["id"]
}
