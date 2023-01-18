interface tile {
	tileId: number
	name: string
	action_id?: number
	tilefamily_id?: number
}

export const Tile: tile[] = [
	{
		tileId: 0,
		name: "Départ",
		action_id: 0,
	},
	{
		tileId: 1,
		name: "Amsterdam",
		tilefamily_id: 0,
	},
]
