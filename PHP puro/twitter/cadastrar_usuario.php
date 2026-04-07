<?php

    if (!isset($_POST['nome']) || !isset($_POST['email']) || !isset($_POST['senha'])) {
        echo "Erro ao recuperar os dados";
    } else {
        require_once("db.class.php");
    
        $objDb = new db();
        $link = $objDb->connectMysql();

        $nome = htmlspecialchars($_POST["nome"]);
        $email = htmlspecialchars($_POST["email"]);
        $senha = md5(htmlspecialchars($_POST["senha"]));

        $sql_query = "insert into usuarios(nome, email, senha) values ('$nome', '$email', '$senha')";

        if (mysqli_query($link, $sql_query)) {
            echo "Usuário $nome cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar usuário $nome";
        }
    }

?>