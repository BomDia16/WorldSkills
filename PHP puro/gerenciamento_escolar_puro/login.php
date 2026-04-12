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

        $sql_query = "select * from admins as a WHERE a.email = '$email' AND a.senha = '$senha'";

        $procurar = mysqli_query($link, $sql_query);
        if (mysqli_num_rows($procurar) == 1) {
            while ($linha = mysqli_fetch_assoc($procurar)) {
                echo $linha['email'];
                $_SESSION['email'] = $linha['email'];
            }
            header("Location: http://localhost:8080/gerenciamento_escolar/");
        } else {
            header("Location: http://localhost:8080/gerenciamento_escolar/login_view.php?erro=1");
        }
    }

?>