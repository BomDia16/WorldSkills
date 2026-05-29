import React from 'react';

const AtividadeSomativa1 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Senha'></input>

                <button type='submit'>Acessar</button>
            </form>
        </div>
    );
};

export default AtividadeSomativa1;