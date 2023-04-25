interface card {
   card_id: number
   name: string
   description: string
   action_id?: number
   cardtype_id?: number
}

export const Card: card[] = [
   {
      card_id: 1,
      name: 'Amsterdam',
      description: 'Amsterdam',
      cardtype_id: 0,
   },
]
