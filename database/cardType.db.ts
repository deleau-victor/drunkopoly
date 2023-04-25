interface cardType {
   cardtype_id: number
   name: string
}

export const CardType: cardType[] = [
   {
      cardtype_id: 0,
      name: 'Propriété',
   },
   {
      cardtype_id: 1,
      name: 'Action',
   },
   {
      cardtype_id: 2,
      name: 'Chance',
   },
]
