interface price {
	tile_id: number
	achat_nu: number
	achat_bar?: number
	acheter_restau?: number
	achat_disco?: number
	loyer_nu: number
	loyer_bar?: number
	loyer_restau?: number
	loyer_disco?: number
}

export const Price: price[] = [
	{
		tile_id: 1,
		achat_nu: 1,
		achat_bar: 2,
		acheter_restau: 3,
		achat_disco: 4,
		loyer_nu: 1,
		loyer_bar: 2,
		loyer_restau: 3,
		loyer_disco: 4,
	},
]
