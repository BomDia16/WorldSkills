import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';


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
    async logar(e) {
        e.preventDefault()
        
        let state = this.state

        await firebase.auth().signInWithEmailAndPassword(state.email, state.senha)
        .then(() => {
            window.location.href = "./principal"
        })
        .catch((error) => {
            this.setState({
                mensagem: "Usuário e/ou senha não batem com os nossos registros!"
            })
        })
    }

    render() {
        // Renderização do formulário de login
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to='/cadastro'>Cadastrar</Link>

                <h1>Atividade_Somativa2</h1>
                <h2>Login</h2>
                <form onSubmit={this.logar}>
                    <input id='email' type='email' placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></input><br/>
                    <input id='senha' type='password' placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})}></input><br/>

                    <button>Acessar</button>
                </form>
                <br/>
                <p>{this.state.mensagem}</p>
            </div>
        );
    }
}

export default Login;