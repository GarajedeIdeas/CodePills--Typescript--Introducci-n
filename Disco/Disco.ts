import { DiscoParams, Song } from "./interface/interface"

export default abstract class Disco {
    protected name: string
    protected pvp: number
    protected songs: Song[]

    public constructor(discoParams: DiscoParams) {
        this.name = discoParams.name
        this.pvp = discoParams.pvp
        this.songs = discoParams.songs
    }

    abstract play(): string
    abstract getSongs(): void
}
