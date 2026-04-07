<?php

    class db {
        private $host = "localhost";
        private $user = "root";
        private $password = "";
        private $banco = "gerenciamento_escolar";

        public function connectMysql() {
            $con = mysqli_connect($this->host, $this->user, $this->password, $this->banco);

            mysqli_set_charset($con, "utf8");

            if (mysqli_connect_errno()) {
                echo "Erro ao conectar no db " + mysqli_connect_error();
            }

            return $con;
        }
    }

?>