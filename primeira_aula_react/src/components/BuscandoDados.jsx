import { useEffect, useState } from "react"

const tarefas = [
    { id: "1", title: "primeira tarefa" },
    { id: "2", title: "segunda tarefa" },
    { id: "3", title: "terceira tarefa" },
    { id: "4", title: "quarta tarefa" },
]

export default function BuscandoDados() {

    const [tarefas, setTarefas] = useState([]) // Resultado da busca de dados

    useEffect(
        () => {
            async function buscarDados() {
                const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
                const resultadoFinal = await resultado.json()
                return resultadoFinal
            }

            buscarDados().then(res => setTarefas(res))

        }
        , []
    )

    return (
        <div>
            <h1>Buscando Dados</h1>
            <h2>Lista de Tarefas:</h2>
            <ol>
                {tarefas.map(function (tarefa) {
                    return (
                        <div>
                            <li key={tarefa.id}>
                                {tarefa.title}
                                {tarefa.completed ? <span> = TAREFA CONCLUÍDA</span> : null}
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}
