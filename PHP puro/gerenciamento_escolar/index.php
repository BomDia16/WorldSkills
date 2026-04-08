<?php

session_start();

if (!isset($_SESSION['email'])) {
    header("Location: http://localhost:8080/gerenciamento_escolar/login_view.php");
}
echo $_SESSION['email'];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bom Dia =)</h1>
</body>
</html>