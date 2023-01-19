interface Position {
	bottom: number
	right: number
}

export const makegameBoardPos = (tileId: number, size: number) => {
	let position: Position = {
		bottom: 0,
		right: 0,
	}
	if (tileId < 7) {
		if (tileId === 0) {
			position.right = 0
		} else {
			if ((tileId + 1) % 7 === 0) {
				position.right = size * 7
			} else {
				position.right = size * tileId + 8 * tileId
			}
		}
	} else if (tileId < 13) {
		position.right = size * 7
		if ((tileId - 5) % 7 === 0) {
			position.bottom = size * 7
		} else {
			position.bottom = size * (tileId - 6) + 8 * (tileId - 6)
		}
	} else if (tileId < 19) {
		if ((tileId - 11) % 7 === 0) {
			position.right = 0
		} else {
			position.right = size * 7 - (8 * (tileId - 12) + size * (tileId - 12))
		}
		position.bottom = size * 7
	} else {
		position.right = 0
		if ((tileId - 16) % 7 === 0) {
			position.bottom = 8 + size
		} else {
			position.bottom = size * 7 - (8 * (tileId - 18) + size * (tileId - 18))
		}
	}
	return position
}
