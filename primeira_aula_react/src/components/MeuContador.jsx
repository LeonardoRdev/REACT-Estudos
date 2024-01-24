import { useState } from "react"
import styles from "./botao.module.css"

export default function MeuContador() {

    // console.log("Renderizando meu contador...")

    let [contador, setContador] = useState(-5) // let contador = -5
    let passo = 1

    function incrementar() {
        setContador(contador + passo)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    function reiniciar() {
        setContador(-5)
    }

    if (contador > 5 && contador < 109) {
        { passo = 3 }
        return (
            <div className="main">
                <h1>Tá funcionando!</h1>
                <h3>{contador}</h3>
                <button className={styles.meuBotao} onClick={incrementar}>Continuar subindo! +3</button>
                <button className={styles.meuBotao} onClick={diminuir}>Voltar -1</button>
            </div>
        )
    }

    else if (contador >= 110) {
        { passo = contador }
        return (
            <div className="main">
                <h1>CONTINUA SUBINDO!!!</h1>
                <h3>{contador}</h3>
                <button className={styles.meuBotao} onClick={incrementar}>SUBIR MUITO! X2</button>
                <button className={styles.meuBotao} onClick={reiniciar}>VOLTAR TUDO</button>
            </div>
        )
    }

    { passo = 1 }
    return (
        <div className="main">
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button className={styles.meuBotao} onClick={incrementar}>Incrementar +1</button>
            <button className={styles.meuBotao} onClick={diminuir}>Voltar -1</button>
        </div>
    )
}
