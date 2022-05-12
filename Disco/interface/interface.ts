export interface DiscoParams {
    name: string
    pvp: number
    songs: Song[]
}

export type Song = {
    name: string
    price: number
}