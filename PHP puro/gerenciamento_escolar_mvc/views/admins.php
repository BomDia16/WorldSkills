<?php

    session_start();

    if (!isset($_SESSION['email'])) {
        header("Location: index.php");
    }

    require_once('../controllers/AdminController.php');

    $controller = new AdminController();
    $result = $controller->index();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['action'])) {
            switch ($_POST['action']) {
                case 'store':
                    $controller->store();
                    break;
                case 'update':
                    break;
                case 'logout':
                    $controller->logout();
                    break;
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admins</title>
</head>
<body>
    <h1>Admins</h1>

    <form method="POST">
        <input type="hidden" name="action" value="store">
        <input type="text" name="nome" placeholder="Nome">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="senha" placeholder="Senha">
        <button type="submit">Salvar</button>
    </form>

    <br>

    <table border="1">
    <thead>
        <td>Nome</td>
        <td>Email</td>
        <td>-</td>
        <td>-</td>
    </thead>
    <?php while ($row = $result->fetch_assoc())  { ?>
    <tr>
        <td><?= $row['nome'] ?></td>
        <td><?= $row['email'] ?></td>
        <td><a href="?edit=<?= $row['id'] ?>">Editar</a></td>
        <td>
            <form method="POST" style="display:inline;">
                <input type="hidden" name="id" value="<?= $row['id'] ?>">
                <input type="hidden" name="action" value="delete">
                <button type="submit">Excluir</button>
            </form>
        </td>
    </tr>
    <?php } ?>

    <form method="post">
        <input type="hidden" name="action" value="logout">
        <button type="submit">Logout</button>
    </form>
</table>
</body>
</html>