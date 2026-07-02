import React, { Component } from 'react';
import firebase from "../../Firebase"

// Tela Principal
class Principal extends Component {

    // construtor com parâmetros iniciais do componente
    constructor(props) {
        super(props)

        // dados do usuário logado
        this.state = {
            nome: "",
            sobrenome: "",
            data_nascimento: ""
        }

        this.logout = this.logout.bind(this)
    }

    // Função para verificar login
    async componentDidMount() {
        
        // recuperar dados do usuário logado
        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid

                await firebase.firestore().collection("usuarios").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        data_nascimento: retorno.data().data_nascimento
                    })
                })
            }
        })
    }

    // função de logout
    async logout() {
        await firebase.auth().signOut()
        .then(() => {
            window.location.href = "./login"
        })
    }

    render() {
        // Renderização dos dados do usuário
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <button onClick={this.logout}>Sair</button>

                <h1>Atividade_Somativa2</h1>
                <h2>Principal</h2>

                <p>{this.state.nome}</p>
                <p>{this.state.sobrenome}</p>
                <p>{this.state.data_nascimento}</p>
                
            </div>
        );
    }
}

export default Principal;