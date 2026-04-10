<?php

class Admin {
    public function getAll($conn) {
        $sql = "Select * from admins";
        return $conn->query($sql);
    }

    public function create($conn, $nome, $email, $senha) {
        $sql = "INSERT INTO admins (nome, email, senha) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die("Erro no prepare: " . $conn->error);
        }

        $stmt->bind_param('sss', $nome, $email, $senha);

        if (!$stmt->execute()) {
            die("Erro no execute: " . $stmt->error);
        }

        return true;
    }

    public function login($conn, $email) {
        $sql = "select * from admins as a WHERE a.email = ?";
        
        $stmt = $conn->prepare($sql);
        
        if (!$stmt) {
            die("Erro no prepare: " . $conn->error);
        }

        $stmt->bind_param('s', $email);

        if (!$stmt->execute()) {
            die("Erro no execute: " . $stmt->error);
        }

        return $stmt->get_result();
    }
}

?>