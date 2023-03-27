export default abstract class JuegoDeCasino {
  protected _nombre: string;
  protected _minJugadores: number;
  protected _maxJugadores: number;
  protected _saldo: number;
  protected _costoJugada: number;

  constructor(nombre: string, minJugadores: number, maxJugadores: number, saldoInicial: number) {
    this._nombre = nombre;
    this._minJugadores = minJugadores;
    this._maxJugadores = maxJugadores;
    this._saldo = saldoInicial;
    this._costoJugada = 0;
  }

  abstract jugar(): void;

  // Getter y setter para el nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre: string) {
    this._nombre = nuevoNombre;
  }

  // Getter y setter para el número mínimo de jugadores
  get minJugadores() {
    return this._minJugadores;
  }

  set minJugadores(nuevoMinJugadores: number) {
    this._minJugadores = nuevoMinJugadores;
  }

  // Getter y setter para el número máximo de jugadores
  get maxJugadores() {
    return this._maxJugadores;
  }

  set maxJugadores(nuevoMaxJugadores: number) {
    this._maxJugadores = nuevoMaxJugadores;
  }

  // Getter y setter para el saldo
  get saldo() {
    return this._saldo;
  }

  set saldo(nuevoSaldo: number) {
    this._saldo = nuevoSaldo;
  }

  // Getter y setter para el saldo
  get costoJugada() {
    return this._saldo;
  }

  set costoJugada(costoJugada: number) {
    this._costoJugada = costoJugada;
  }

  // Método para iniciar el juego
  iniciarJuego() {
    console.log(`¡Comenzando el juego de ${this._nombre}!`);
  }

  public apostar(monto: number): void {
    if (monto <= this._saldo) {
      this._saldo -= monto;
      console.log(`Se apostaron ${monto} unidades. Nuevo saldo: ${this._saldo}`);
    } else {
      console.log(
        `No se puede apostar ${monto} unidades. Saldo insuficiente: ${this._saldo}`
      );
    }
  }

  public cobrarPremio(monto: number): void {
    this._saldo += monto;
    console.log(`Se ganaron ${monto} unidades. Nuevo saldo: ${this._saldo}`);
  }
}
