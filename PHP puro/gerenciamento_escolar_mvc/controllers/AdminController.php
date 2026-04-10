<?php

require_once "../connection.php";
require_once "../models/Admin.php";

session_start();

class AdminController {

    public function index() {
        $admin = new Admin();
        global $conn;
        return $admin->getAll($conn);
    }

    public function store() {
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $nome = $_POST['nome'];
            $email = $_POST['email'];
            $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
            global $conn;

            $prof = new Admin();
            $prof->create($conn, $nome, $email, $senha);

            header('Location: admins.php');
            exit;
        }
    }

    public function logar() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            global $conn;

            $email = $_POST['email'];
            $senha = $_POST['senha'];

            $admin = new Admin();
            $result = $admin->login($conn, $email);

            if ($result->num_rows == 1) {
                $admin = $result->fetch_assoc();

                if(password_verify($senha, $admin['senha'])) {
                    $_SESSION['email'] = $admin['email'];
                    header("Location: admins.php");
                    exit;
                }else {
                    header("Location: index.php?erro=1");
                    exit;
                }
            } else {
                header("Location: index.php?erro=1");
                exit;
            }
        }
    }

    public function logout() {
        unset($_SESSION['email']);
    }

}