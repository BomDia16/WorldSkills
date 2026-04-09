<?php

    class Professor {
        public function getAll($conn) {
            $sql = "Select * from professores";
            return $conn->query($sql);
        }

        public function create($conn, $nome, $email, $senha) {
            $sql = "INSERT INTO professores (nome, email, senha) VALUES (?, ?, ?)";
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

        public function update($conn, $id, $nome, $email, $senha) {
            $sql = "UPDATE professores SET nome = ?, email = ?, senha = ? WHERE id = ?";
            
            $stmt = $conn->prepare($sql);

            if (!$stmt) {
                die("Erro no prepare: " . $conn->error);
            }

            $stmt->bind_param('sssi', $nome, $email, $senha, $id);

            if (!$stmt->execute()) {
                die("Erro no execute: " . $stmt->error);
            }

            return true;
        }

        public function delete($conn, $id) {
            $sql = "DELETE FROM professores WHERE id = ?";

            $stmt = $conn->prepare($sql);

            if (!$stmt) {
                die("Erro no prepare: " . $conn->error);
            }

            $stmt->bind_param('i', $id);

            if (!$stmt->execute()) {
                die("Erro no execute: " . $stmt->error);
            }

            return true;
        }

        public function login($conn, $email) {
            $sql = "select * from professores as a WHERE a.email = ?";
            
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