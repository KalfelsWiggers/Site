<?php
    include("conecta.php");

    $email = $_POST["email"];
    $cpf   = $_POST["cpf"];
    $senha = $_POST["senha"];

    if(isset($_POST["entrar"]) )
    {
        $comando = $pdo->prepare("INSERT INTO usuario(email, cpf, senha) VALUE('$email','$cpf',$senha)");
        $resultado = $comando->execute();
        header("Location: ../HUB/HUB.html");
    }

?>