function ValidarCPF() 
{
    expressao = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/g;
    texto = cpf.value
    resposta = expressao.test(texto);
    if (resposta == false) 
    {
        cpf.classList.remove('certo');
        cpf.classList.add('errado');
    }
    if (resposta == true) 
    {
        cpf.classList.remove('errado');
        cpf.classList.add('certo');
    }
}

function Troca(imagem)
{
  perfil.src=imagem;
}

password = document.getElementById("senha"),
confirm_password = document.getElementById("confirmar_senha");

function ValidarSenha()
{
  if(password.value != confirm_password.value) 
  {
    confirmar_senha.classList.remove('certo');
    confirmar_senha.classList.add('errado');
  } 
  else 
  {
    confirmar_senha.classList.remove('errado');
    confirmar_senha.classList.add('certo');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function Verificar()
{
    if (senha.value.length < 8)
    {
        alert ("A senha deve contar no mínimo 8 caracteres");
    }
}