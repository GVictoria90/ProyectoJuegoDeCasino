import JuegoDeCasino from "./JuegoDeCasino";

export default class Casino {
  private juegos: JuegoDeCasino[];

  constructor(juegos: JuegoDeCasino[]) {
    this.juegos = juegos;
  }

  public openGame(juego: JuegoDeCasino): void {
    this.juegos.push(juego);
  }

  public closeGame(index: number): void {
    this.juegos.splice(index, 1);
  }
}
