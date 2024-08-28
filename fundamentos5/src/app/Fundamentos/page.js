import MeuComponente from "./meucomponente";
import NumeroMaior from "./NumeroMaior";
export default function Fundamentos() {

    return (
        <>
            <h1>Pagina Fundamentos</h1>
            <hr />

            <MeuComponente />
            <hr />

            <NumeroMaior numA={2}  numB={10} />
            <hr />


        </>

    )

}