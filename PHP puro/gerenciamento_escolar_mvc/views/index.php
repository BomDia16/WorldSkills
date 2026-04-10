<?php

    require_once('../controllers/AdminController.php');

    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $controller = new AdminController();
        $controller->logar();
    }

    if (isset($_GET["erro"]) == 1) {
        $erro = 1;
    } else {
        $erro = 0;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form method="post">
        <p id="erro"></p>
        <input type="text" name="email" placeholder="email">
        <input type="password" name="senha" placeholder="senha">
        <button type="submit">Logar</button>
    </form>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let erro = <?= $erro ?>
            
            if (erro == 1) {
                document.getElementById("erro").innerHTML = "Dados incorretos"
            }
        })
    </script>
</body>
</html>