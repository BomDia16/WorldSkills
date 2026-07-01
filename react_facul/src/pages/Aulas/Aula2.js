import { useState } from 'react';

function Aula2() {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }

    const diminuir = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    );
}

export default Aula2;
