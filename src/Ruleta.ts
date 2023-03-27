import JuegoDeCasino from "./JuegoDeCasino";

export default class Ruleta extends JuegoDeCasino {
  private _numeros: number[];
  private _colorNumeros: Map<number, string>;
  private _numCasillas: number;

  constructor(nombre: string, minJugadores: number, maxJugadores: number, saldoInicial: number, numCasillas: number) {
    super(nombre, minJugadores, maxJugadores, saldoInicial);
    this._costoJugada = 10;
    this._numeros = [];
    //Se cargan los numeros
    for (let i = 0; i < 37; i++) {
      this._numeros.push(i);
    }
    this._colorNumeros = new Map<number, string>();
    //Se carga el grupo de numeros y colores
    for (let i = 0; i < this._numeros.length; i++) {
      let key: number = i;
      let value: string;
      if (i === 0) {
        value = "verde";
      } else if (i % 2 !== 0) {
        value = "rojo";
      } else {
        value = "negro";
      }
      this._colorNumeros.set(key, value);
    }
    this._numCasillas = numCasillas;
  }

  // Getter y setter para el número de casillas
  get numCasillas() {
    return this._numCasillas;
  }

  set numCasillas(nuevoNumCasillas: number) {
    this._numCasillas = nuevoNumCasillas;
  }

  // Sobrescribir el método iniciarJuego
  iniciarJuego() {
    console.log(`¡Comenzando la ruleta de ${this._nombre} con ${this._numCasillas} casillas!`);
  }

  public jugar(): void {
    this.iniciarJuego();
    this.apostar(this._costoJugada);
    const bet: number = Math.floor(Math.random() * this._numeros.length);
    let pricedNumber: number = this.getNumero();
    console.log("" + pricedNumber + ", " + this.getInfo(pricedNumber));
    if (bet === pricedNumber) {
      const premio: number = Math.floor(Math.random() * 201) + 100;
      console.log(`¡Ganaste ${premio} unidades!`);
      this.cobrarPremio(premio);
    }
  }

  private getNumero(): number {
    return this._numeros[Math.floor(Math.random() * this._numeros.length)];
  }

  private getInfo(numero: number): string {
    return this._colorNumeros.get(numero) as string;
    //return Ruleta.colorNumeros: Map<number ,string>
  }
}
