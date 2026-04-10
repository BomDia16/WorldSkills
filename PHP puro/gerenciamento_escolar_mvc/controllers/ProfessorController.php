<?php

    require_once "../connection.php";
    require_once "../models/Professor.php";

    session_start();

    class ProfessorController {


        public function index() {
            $prof = new Professor();
            global $conn;
            return $prof->getAll($conn);
        }

        public function store() {
            if ($_SERVER['REQUEST_METHOD'] === "POST") {
                $nome = $_POST['nome'];
                $email = $_POST['email'];
                $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
                global $conn;

                $prof = new Professor();
                $prof->create($conn, $nome, $email, $senha);

                header('Location: professores.php');
                exit;
            }
        }

        public function update() {
            if ($_SERVER['REQUEST_METHOD'] === "POST") {
                $id = $_POST['id'];
                $nome = $_POST['nome'];
                $email = $_POST['email'];
                
                if (!empty($_POST['senha'])) {
                    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
                } else {
                    $senha = null;
                }

                global $conn;

                $prof = new Professor();

                if ($senha) {
                    $prof->update($conn, $id, $nome, $email, $senha);
                } else {
                    $sql = "UPDATE professores SET nome = ?, email = ? WHERE id = ?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssi', $nome, $email, $id);
                    $stmt->execute();
                }

                header('Location: professores.php');
                exit;
            }
        }

        public function delete() {
            if ($_SERVER['REQUEST_METHOD'] === "POST") {
                global $conn;

                $id = $_POST['id'];

                $prof = new Professor();
                $prof->delete($conn, $id);

                header('Location: professores.php');
                exit;
            }
        }

        
    }