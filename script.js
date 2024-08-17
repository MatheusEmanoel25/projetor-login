// Simulando um banco de dados
const usersDB = {
    'user1': 'password1',
    'user2': 'password2'
};

//  login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); //impede o envio do formularo que carregaria a pagina
   
   // pegar os dados de entrada do usuário
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    
    if (usersDB[username] === password) {
        alert('Login bem-sucedido!'); //verificando as informações existe no BD
       
        location.href = 'index.html'; 
        document.getElementById('errorMessage').innerText = 'Usuário ou senha incorretos!'; //se as informação estive correta sera direcionado para index
        document.getElementById('errorMessage').classList.remove('hidden'); //se o login falhou aparece mensagem de erro na tela
    }
});

//  cadastro

// seleciona o formulario de cadstro
document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    //pegar os dados do novo  usuário
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    //verifica o BD, se tive dados existente messagem de erro na tela  
    if (usersDB[newUsername]) {
        document.getElementById('registerMessagem').innerText = 'Usuário já existe!';
        document.getElementById('registerMessagem').classList.remove('hidden');
    } else {
        usersDB[newUsername] = newPassword;
        alert('Cadastro bem-sucedido! Faça login.');
        location.href = 'login.html'; //adicionar  informações no BD volta para tela de login
    }
});
// home 

//se o usuário fazer o login sera encaminhado para o site
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  window.location.href = 'home.html'; }

