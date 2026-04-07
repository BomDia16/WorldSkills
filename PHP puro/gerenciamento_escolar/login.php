<?php
    session_start();
    
    if (!isset($_POST['email']) || !isset($_POST['senha'])) {
        echo "Erro ao recuperar os dados";
    } else {
        $email = htmlspecialchars($_POST["email"]);
        $senha = htmlspecialchars($_POST["senha"]);

        if (empty($email) || empty($senha)) {
            header("Location: http://localhost:8080/gerenciamento_escolar/login_view.php?erro=1");
        }

        require_once("db.class.php");
    
        $objDb = new db();
        $link = $objDb->connectMysql();

        $sql_query = "select email, senha from admins as a WHERE a.email = '$email' AND a.senha = '$senha'";


        if (mysqli_query($link, $sql_query)) {
            echo "Usuário encontrado com sucesso!";
        } else {
            header("Location: http://localhost:8080/gerenciamento_escolar/login_view.php?erro=1");
        }
    }

?>