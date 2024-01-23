import { useEffect, useState } from "react"

const minhaLista = [
    { id: "1", value: "Frutas" },
    { id: "2", value: "Legumes" },
    { id: "3", value: "Carnes" },
    { id: "4", value: "Doces" },
    { id: "5", value: "Bebidas" }
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista) // "produtos" = minhaLista
    const [pesquisa, setPesquisa] = useState("") // O valor do input

    useEffect(
        () => {
            if (pesquisa) {
                const novaLista = minhaLista.filter(function (item) {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)
            }
            else {
                setProdutos(minhaLista)
            }
        }
        , [pesquisa] // Só vai executar o useEffect() quando "pesquisa" se alterar
    )

    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="pesquise aqui">
            </input>
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>Item {item.id} = {item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}