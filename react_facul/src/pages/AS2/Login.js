import React, { Component } from 'react';


// Tela de login
class Login extends Component {

    // construtor com parâmetros iniciais do componente
    constructor(props) {
        super(props)

        // dados do login
        this.state = {
            mensagem: "",
            email: "",
            senha: ""
        }

        // fazer o bind da função logar
        this.logar = this.logar.bind(this)
    }

    // Função para verificar login
    logar(e) {
        e.preventDefault()
        
        let state = this.state
        // state.mensagem = "Deu certo"
        // this.setState(state)

        const email = document.getElementById("email").value
        const senha = document.getElementById("senha").value

        // Lógica de verificação
        if (state.email === email && state.senha === senha) {
            state.mensagem = "Acessado com sucesso!"
        } else {
            state.mensagem = "Usuário ou senha incorretos!"
        }

        this.setState(state)
    }

    render() {
        // Renderização do formulário de login
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Atividade_Somativa2</h1>
                <h2>Login</h2>
                <form onSubmit={this.logar}>
                    <input id='email' type='email' placeholder='Email'></input><br/>
                    <input id='senha' type='password' placeholder='Senha'></input><br/>

                    <button>Acessar</button>
                </form>
                <br/>
                <p>{this.state.mensagem}</p>
            </div>
        );
    }
}

export default Login;