import Disco from "./Disco";
import { DiscoParams } from "./interface/interface";

export default class Vinillo extends Disco {

  public constructor(discoParams: DiscoParams) {
      super(discoParams)
  }

  play(): string {
    return `Soy un vinillo: ${this.name} cuesto ${this.pvp} y estoy reproduciendo canciones en un tocadiscos`;
  }
  getSongs(): void {
    this.songs.forEach(song => {
        console.log(`La cancion ${song.name} cuesta ${song.price}`)
    })
}
}
