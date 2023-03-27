import JuegoDeCasino from "./JuegoDeCasino";
import Ruleta from "./Ruleta";
import TragaMonedas from "./TragaMonedas";
import Casino from "./Casino";


let ruleta: Ruleta = new Ruleta('Ruleta', 5, 10, 200, 32);
let tragaMonedas: TragaMonedas = new TragaMonedas('Tragamonedas', 10, 20, 300, 52);
let casino: Casino = new Casino([ruleta, tragaMonedas]);
console.log(casino);

ruleta.jugar();
tragaMonedas.jugar();
