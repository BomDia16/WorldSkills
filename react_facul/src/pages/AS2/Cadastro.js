import React, { Component } from 'react';
import firebase from "../../Firebase"
import { Link } from 'react-router-dom';

// Tela de Cadastro
class Cadastro extends Component {

    // construtor com parâmetros iniciais do componente
    constructor(props) {
        super(props)

        // dados do cadastro
        this.state = {
            nome: "",
            sobrenome: "",
            data_nascimento: "",
            mensagem: "",
            email: "",
            senha: "",
            hoje: new Date().toISOString().split("T")[0]
        }

        // fazer o bind da função cadastrar
        this.cadastrar = this.cadastrar.bind(this)
    }

    // Função para cadastrar o usuário tanto na área de autenticação quanto na área dos dados pessoais
    async cadastrar(e) {
        e.preventDefault()
        
        let state = this.state

        // Lógica de verificação de campos obrigatórios
        if (!state.nome || !state.sobrenome || !state.data_nascimento || !state.email || !state.senha) {
            state.mensagem = "Todos os campos são obrigatórios!"
        } else if (state.senha.length < 6) {
            state.mensagem = "A senha deve possuir no mínimo 6 caracteres"
        } else {
            
            state.mensagem = "Cadastrando usuário!"

            // Criar usuário para autenticação
            await firebase.auth().createUserWithEmailAndPassword(state.email, state.senha)
            .then(async (retorno) => {
                
                // Com base no usuário criado, salvar também suas outras informações na coleção users
                await firebase.firestore().collection("usuarios").doc(retorno.user.uid).set({
                    nome: state.nome,
                    sobrenome: state.sobrenome,
                    data_nascimento: state.data_nascimento
                })
            })
            .catch((erro) => {
                state.mensagem = "Erro ao cadastrar usuário: " + erro
            })

            state.mensagem = "Usuário cadastrado com sucesso!"
        }

        this.setState(state)
    }

    render() {
        // Renderização do formulário de cadastro
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to='/login'>Login</Link>

                <h1>Atividade_Somativa2</h1>
                <h2>Cadastrar Usuário</h2>
                <form onSubmit={this.cadastrar}>
                    <input id='nome' type='text' placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})}></input><br/>
                    <input id='sobrenome' type='text' placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})}></input><br/>
                    <input id='data_nascimento' max={this.state.hoje} type='date' onChange={(e) => this.setState({data_nascimento: e.target.value})}></input><br/>
                    <input id='email' type='email' placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></input><br/>
                    <input id='senha' type='password' placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})}></input><br/>

                    <button>Cadastrar</button>
                </form>
                <br/>
                <p>{this.state.mensagem}</p>
            </div>
        );
    }
}

export default Cadastro;