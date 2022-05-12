import Disco from "./Disco";
import { DiscoParams } from "./interface/interface";

export default class CD extends Disco {

  public constructor(discoParams: DiscoParams) {
      super(discoParams)
  }

  play(): string {
    return `Soy un CD: ${this.name} cuesto ${this.pvp} y estoy reproduciendo canciones en un walkman`;
  }
  getSongs(): void {
    this.songs.forEach(song => {
        console.log(`La cancion ${song.name} cuesta ${song.price}`)
    })
}
}
