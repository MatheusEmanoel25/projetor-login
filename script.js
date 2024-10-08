
// Simulando um banco de dados
const usersDB = {
    'user1': 'password1',
    'user2': 'password2'
};

//  login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'home.html';
    });

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (usersDB[username] === password) {
        alert('Login bem-sucedido!');

        location.href = 'index.html';
        document.getElementById('errorMessage').innerText = 'Usuário ou senha incorretos!';
        document.getElementById('errorMessage').classList.remove('hidden');
    }
});

//  cadastro
document.getElementById('cadastroForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (usersDB[newUsername]) {
        document.getElementById('registerMessagem').innerText = 'Usuário já existe!';
        document.getElementById('registerMessagem').classList.remove('hidden');
    } else {
        usersDB[newUsername] = newPassword;
        alert('Cadastro bem-sucedido! Faça login.');
        location.href = 'login.html';
    }
});

