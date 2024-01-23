const minhaLista = [
    { id: "1", value: "Frutas" },
    { id: "2", value: "Legumes" },
    { id: "3", value: "Carnes" }
]

export default function MinhaLista() {

    return minhaLista.map((item) => {
        return (
            <div key={item.id}>
                <h4>Item {item.id} = {item.value}</h4>
            </div>
        )
    })
}