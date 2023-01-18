interface tileFamily {
	tilefamilyId: number
	name: string
	forTile?: number[]
}

export const TileFamily: tileFamily[] = [
	{
		tilefamilyId: 1,
		name: "Europe",
	},
	{
		tilefamilyId: 2,
		name: "Asie",
	},
	{
		tilefamilyId: 3,
		name: "Amérique",
	},
	{
		tilefamilyId: 4,
		name: "Afrique",
	},
]
