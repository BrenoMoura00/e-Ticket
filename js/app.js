function comprar(){
    //Chamando os elementos
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeInput = parseInt(document.getElementById('qtd').value);
    let eletmentoQuantidade = document.getElementById(`qtd-${tipo}`);
    let quantidadeDisponivel = parseInt(eletmentoQuantidade.textContent);

    //aplicando a lógica
    if(quantidadeDisponivel >= quantidadeInput){
        eletmentoQuantidade.textContent = quantidadeDisponivel - quantidadeInput;
        alert('Compra realizada com sucesso')
    } else {
        alert('Verifique a quantidade de cadeiras dísponiveis.')
    }

    //limpando o campo QTD
    let limparQtd = document.querySelector('input');
    limparQtd.value = '';
}