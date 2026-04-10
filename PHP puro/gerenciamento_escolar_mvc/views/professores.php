<?php

session_start();

if (!isset($_SESSION['email'])) {
    header("Location: index.php");
}

require_once('../controllers/ProfessorController.php');

$controller = new ProfessorController();
$result = $controller->index();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'update' :
                $controller->update();
                break;
            case 'store':
                $controller->store();
                break;
            case 'delete':
                $controller->delete();
                break;
        }
    }
}

$editData = null;

if (isset($_GET['edit'])) {
    $id = $_GET['edit'];
    global $conn;

    $resultEdit = $conn->query("SELECT * FROM professores WHERE id = $id");
    $editData = $resultEdit->fetch_assoc();
}

?>

<h1>Professores</h1>

<form method="POST">
    <input type="hidden" name="action" value="store">
    <input type="text" name="nome">
    <input type="email" name="email">
    <input type="password" name="senha">
    <button type="submit">Salvar</button>
</form>

<form method="POST">
    <input type="hidden" name="id" value="<?= $editData['id'] ?? '' ?>">

    <input type="text" name="nome" placeholder="Nome"
        value="<?= $editData['nome'] ?? '' ?>">

    <input type="email" name="email" placeholder="Email"
        value="<?= $editData['email'] ?? '' ?>">

    <input type="password" name="senha" placeholder="Nova senha (opcional)">

    <button type="submit" name="action" value="update">Atualizar</button>
</form>

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
</table>