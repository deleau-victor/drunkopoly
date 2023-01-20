export interface Player {
	id: number
	name: string
	position: number
	color: string
	possesion: number[]
	gorgées: number
}

export interface PlayerState {
	players: Player[]
	currentPlayer: Player["id"]
}
