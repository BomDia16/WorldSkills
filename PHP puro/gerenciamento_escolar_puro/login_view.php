<?php

    if (isset($_GET["erro"]) == 1) {
        $erro = 1;
    }

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <p id="erro"></p>
    <form action="login.php" method="post">
        <input type="email" name="email" id="email" placeholder="Email">
        <input type="text" name="senha" id="senha" placeholder="Senha">

        <button type="submit" id="logar">Login</button>
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