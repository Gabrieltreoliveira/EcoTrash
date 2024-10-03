<?php
session_start();

// Usuários e senhas simulados (normalmente, isso seria consultado de um banco de dados)
$usuarios = [
    'admin' => 'admin123',
    'usuario1' => 'senha123',
    'usuario2' => 'senha456'
];

// Verificar se os dados do formulário foram enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verificar se o nome de usuário e a senha estão corretos
    if (isset($usuarios[$username]) && $usuarios[$username] === $password) {
        // Definir a sessão e redirecionar para o dashboard
        $_SESSION['username'] = $username;
        header("Location: dashboard.html");
        exit;
    } else {
        // Senha ou usuário incorreto
        echo "<p>Nome de usuário ou senha inválidos. Tente novamente.</p>";
    }
}
?>
