import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { propriétés } from "../store/types/properties"

const initialState: propriétés[] = []

const proprietesSlice = createSlice({
	name: "Proprietes",
	initialState: initialState,
	reducers: {
		propertyWasBought: (
			state,
			action: PayloadAction<{ propertyId: number; ownerId: number }>,
		) => {
			state.push({
				level: 0,
				propertyId: action.payload.propertyId,
				ownerId: action.payload.ownerId,
			})
			return state
		},
		augmentPropertyLevel: (state, action: PayloadAction<number>) => {
			state.filter(
				(property) => property.propertyId === action.payload,
			)[0].level += 1
			return state
		},
	},
})

const { actions, reducer } = proprietesSlice

export const { propertyWasBought, augmentPropertyLevel } = actions

export default reducer
