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
function validarSenha() 
{
    var senha = document.getElementById("senha").value;
    var confirmacaoSenha = document.getElementById("confirmacao").value;
    
    if (senha == confirmacaoSenha) 
    {
        confirmacao.classList.remove('certo');
        confirmacao.add('errado');
    } 
    else 
    {
        confirmacao.classList.remove('errado');
        confirmacao.classList.add('certo');
    }
  }