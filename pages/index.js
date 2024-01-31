import { useState } from 'react';

function Home() {
    return <div>
            <h1>Página Bolada</h1>
            <Contador />
        </div>
}

function Contador() {
    const [contador, setContador] = useState(0);

    function AdicionarContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home