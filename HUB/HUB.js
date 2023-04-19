function ValidarCEP() 
{
    expressao = /^[0-9]{5}-[0-9]{3}$/g;
    texto = cep.value
    resposta = expressao.test(texto);
    if (resposta == false) 
    {
        cep.classList.remove('certo');
        cep.classList.add('errado');
    }
    if (resposta == true) 
    {
        cep.classList.remove('errado');
        cep.classList.add('certo');
    }
}
function calcularFrete() 
{
    expressao = /^[0-9]{5}-[0-9]{3}$/g;
    texto = cep.value
    resposta = expressao.test(texto);
    if (resposta == true) 
    {
        const cep = document.getElementById("cep").value;
        const frete = Math.random() * 50; // valor de frete fictício
        const freteFormatado = frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("frete").textContent = `O valor do frete para o CEP: ${cep} é de ${freteFormatado}.`;
    }

}
function Troca(imagem)
{
    perfil.src=imagem;
}