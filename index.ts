import Vinillo from "./Disco/Vinillo";
import CD from './Disco/CD'

const vinillo = new Vinillo({name: 'Garaje vintage', pvp: 20, songs:  [
    {
    name: 'Garaje molon',
    price: 1
},
{
    name: 'Garaje muy molon',
    price: 19
}
] 
})
const cd = new CD({
    name: 'Garaje CD', 
    pvp: 10, 
    songs: [
        {
        name: 'Garaje molon',
        price: 1
    },
    {
        name: 'Garaje muy molon',
        price: 9
    }
]
})

vinillo.getSongs()