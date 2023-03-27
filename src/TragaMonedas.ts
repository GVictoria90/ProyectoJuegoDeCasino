import JuegoDeCasino from "./JuegoDeCasino";

export default class TragaMonedas extends JuegoDeCasino {
  private _simbolos: string[] = ["🍒", "🍊", "🍇", "🍉", "🔔", "💰", "7️⃣"];
  private _numTambores: number;

  constructor(nombre: string, minJugadores: number, maxJugadores: number, saldoInicial: number, numTambores: number) {
    super(nombre, minJugadores, maxJugadores, saldoInicial);
    this._costoJugada = 10;
    this._numTambores = numTambores;
  }

  // Getter y setter para el número de tambores
  get numTambores() {
      return this._numTambores;
  }

  set numTambores(nuevoNumTambores: number) {
      this._numTambores = nuevoNumTambores;
  }

  // Sobrescribir el método iniciarJuego
  iniciarJuego() {
      console.log(`¡Comenzando el tragamonedas de ${this.nombre} con ${this._numTambores} tambores!`);
  }

  public jugar(): void {
    this.iniciarJuego();
    if (this.saldo < this.costoJugada) {
      console.log("No tienes suficiente saldo para jugar al tragamonedas.");
      return;
    }
    this.apostar(this.costoJugada);
    console.log("Inicio del juego Tragamoneda");
    const resultado: string[] = [];

    for (let i = 0; i < 3; i++) {
      const index: number = Math.floor(Math.random() * this._simbolos.length);
      resultado.push(this._simbolos[index]);
    }

    console.log(`Resultado: ${resultado.join(" ")}`);

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
      const premio: number = Math.floor(Math.random() * 101) + 50;
      console.log(`¡Ganaste ${premio} unidades!`);
      this.cobrarPremio(premio);
    } else {
      console.log("No ganaste nada.");
    }
  }
}
